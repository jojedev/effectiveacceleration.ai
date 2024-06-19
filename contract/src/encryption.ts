import { xchacha20poly1305 } from "@noble/ciphers/chacha";
import { randomBytes } from "@noble/ciphers/crypto";
import { utf8ToBytes } from "@noble/ciphers/utils";
import { getBytes, hexlify, toUtf8String, decodeBase58, encodeBase58, toBeArray, encodeBase64, decodeBase64, SigningKey, keccak256, Signer, JsonRpcSigner } from "ethers";

export const cidToHash = (cid: string): string => {
  if (cid.length !== 46 || !cid.match(/^Qm/)) {
    throw new Error("invalid cid");
  }
  return hexlify(toBeArray(decodeBase58(cid)).slice(2));
}

export const hashToCid = (hash: string): string => {
  if (getBytes(hash).length !== 32) {
    throw new Error("invalid hash");
  }
  return encodeBase58(Uint8Array.from([0x12, 0x20, ...getBytes(hash)]));
}

export const encryptBinaryData = (data: Uint8Array, sessionKey: string | undefined): Uint8Array => {
  if (data.length === 0) {
    throw new Error("empty data");
  }

  if (!sessionKey) {
    return Uint8Array.from([...new Uint8Array(24), ...data]);
  }

  const nonce = randomBytes(24);
  const chacha = xchacha20poly1305(getBytes(sessionKey), nonce);
  return Uint8Array.from([...nonce, ...chacha.encrypt(data)]);
}

export const encryptUtf8Data = (data: string, sessionKey: string | undefined): Uint8Array => {
  return encryptBinaryData(utf8ToBytes(data), sessionKey);
}

export const publishToIpfs = async (message: string, sessionKey: string | undefined = undefined): Promise<{
  hash: string;
  cid: string;
}> => {
  const encodedData: string = encodeBase64(encryptUtf8Data(message, sessionKey));

  const host = process.env.IPFS_API_URL || "http://localhost:8000";

  const response = await fetch(host, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dataB64: encodedData,
    }),
  });

  const { hash, cid } = await response.json();
  return { hash, cid };
}

export const decryptBinaryData = (data: Uint8Array, sessionKey: string | undefined): Uint8Array => {
  const nonce = data.slice(0, 24);
  if (nonce.every(b => b === 0)) {
    return data.slice(24);
  }

  if (!sessionKey) {
    throw new Error("Session key is required to decrypt the message");
  }

  const chacha = xchacha20poly1305(getBytes(sessionKey), nonce);
  return chacha.decrypt(data.slice(24));
}

export const decryptUtf8Data = (data: Uint8Array, sessionKey: string | undefined): string => {
  return toUtf8String(decryptBinaryData(data, sessionKey));
}

// fetches raw encrypted contents from IPFS
export const getFromIpfsRaw = async (cidOrHash: string): Promise<string> => {
  const isCid = cidOrHash.indexOf("Qm") === 0;
  if (!isCid) {
    cidOrHash = hashToCid(cidOrHash);
  }

  const key = `IpfsContent-${cidOrHash}`;

  let content = globalThis.localStorage?.getItem(key);
  if (content) {
    return content;
  }

  const host = process.env.IPFS_GATEWAY_URL || "http://localhost:8080";
  const respose = await fetch(`${host}/ipfs/${cidOrHash}`);
  if (respose.status !== 200) {
    throw new Error(`Failed to fetch data from IPFS\n${respose.statusText}\n${await respose.text()}`);
  }
  const dataB64 = await respose.text();
  globalThis.localStorage?.setItem(key, dataB64);

  return dataB64;
}

// fetches data and decrypts it
export const getFromIpfs = async (cidOrHash: string, sessionKey: string | undefined = undefined): Promise<string> => {
  const decodedData = decodeBase64(await getFromIpfsRaw(cidOrHash));
  return decryptUtf8Data(decodedData, sessionKey);
}

// fetches the encrypted data and attempt to decrypt it, bails with readable error message if decryption fails
export const safeGetFromIpfs = async (cidOrHash: string, sessionKey: string | undefined = undefined): Promise<string> => {
  try {
    const decodedData = decodeBase64(await getFromIpfsRaw(cidOrHash));
    return decryptUtf8Data(decodedData, sessionKey);
  } catch (error: any) {
    return `Encrypted message`;
  }
}

export const getEncryptionSigningKey = async (signer: Signer | JsonRpcSigner): Promise<SigningKey> => {
  const key = `HashedSignature-${await signer.getAddress()}`;

  let hashedSignature = globalThis.localStorage?.getItem(key);
  if (hashedSignature) {
    return new SigningKey(hashedSignature);
  }

  const signature = await signer.signMessage("Please sign this message to allow for encrypted message exchange.");
  hashedSignature = keccak256(keccak256(signature));
  globalThis.localStorage?.setItem(key, hashedSignature);
  return new SigningKey(hashedSignature);
}

export const getSessionKey = async (signer: Signer | JsonRpcSigner, otherCompressedPublicKey: string): Promise<string> => {
  if (getBytes(otherCompressedPublicKey).length !== 33) {
    throw new Error("Invalid public key, must be compressed");
  }

  const aliceEncryptionSigningKey = await getEncryptionSigningKey(signer);

  const sharedSecret = aliceEncryptionSigningKey.computeSharedSecret(otherCompressedPublicKey);

  return keccak256(keccak256(sharedSecret));
}