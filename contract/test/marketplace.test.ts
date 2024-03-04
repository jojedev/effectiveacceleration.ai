import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { Signer } from "ethers";
import { MarketplaceV1 as Marketplace } from "../typechain-types/contracts/MarketplaceV1";
import { FakeToken } from "../typechain-types/contracts/unicrow/FakeToken";

describe("Marketplace Unit Tests", () => {
  async function deployContractsFixture(): Promise<{
    marketplace: Marketplace;
    fakeToken: FakeToken;
    deployer: SignerWithAddress;
    user1: SignerWithAddress;
    user2: SignerWithAddress;
  }> {
    const [deployer, user1, user2] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory(
      "MarketplaceV1"
    );
    const marketplace = (await upgrades.deployProxy(Marketplace, [
      await deployer.getAddress(),
    ]));
    await marketplace.waitForDeployment();
    // console.log("Marketplace deployed to:", await marketplace.getAddress());

    const FakeToken = await ethers.getContractFactory(
      "FakeToken"
    );
    const fakeToken = await FakeToken.deploy("Test", "TST");
    // console.log("FakeToken deployed to:", await fakeToken.getAddress());

    return { marketplace, fakeToken, deployer, user1, user2 };
  }

  describe("admin", () => {
    it("transfer owner", async () => {
      const { marketplace, deployer, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(deployer)
        .transferOwnership(await user1.getAddress())
      ).to.emit(marketplace, 'OwnershipTransferred')
      .withArgs(await deployer.getAddress(), await user1.getAddress());

      expect(await marketplace.owner()).to.equal(await user1.getAddress());
    });

    it("non owner cannot transfer owner", async () => {
      const { marketplace, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(user1)
        .transferOwnership(await user1.getAddress())
      ).to.be.reverted;
    });

    it("transfer pauser", async () => {
      const { marketplace, deployer, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(deployer)
        .transferPauser(await user1.getAddress())
      ).to.emit(marketplace, 'PauserTransferred')
      .withArgs(await deployer.getAddress(), await user1.getAddress());

      expect(await marketplace.pauser()).to.equal(await user1.getAddress());
    });

    it("non owner cannot transfer pauser", async () => {
      const { marketplace, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(user1)
        .transferPauser(await user1.getAddress())
      ).to.be.reverted;
    });

    it("transfer treasury", async () => {
      const { marketplace, deployer, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(deployer)
        .transferTreasury(await user1.getAddress())
      ).to.emit(marketplace, 'TreasuryTransferred')
      .withArgs(await deployer.getAddress(), await user1.getAddress());

      expect(await marketplace.treasury()).to.equal(await user1.getAddress());
    });

    it("non owner cannot transfer treasury", async () => {
      const { marketplace, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(user1)
        .transferTreasury(await user1.getAddress())
      ).to.be.reverted;
    });

    it("pause/unpause", async () => {
      const { marketplace, deployer, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(deployer)
        .pause()
      ).to.emit(marketplace, 'Paused')
      .withArgs(await deployer.getAddress());

      expect(await marketplace.paused()).to.equal(true);

      await expect(marketplace
        .connect(deployer)
        .unpause()
      ).to.emit(marketplace, 'Unpaused')
      .withArgs(await deployer.getAddress());

      expect(await marketplace.paused()).to.equal(false);
    });

    it("non pauser cannot pause", async () => {
      const { marketplace, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(user1)
        .pause()
      ).to.be.reverted;
    });

    it("non pauser cannot unpause", async () => {
      const { marketplace, deployer, user1 } = await loadFixture(deployContractsFixture);
      await marketplace.connect(deployer).pause();

      await expect(marketplace
        .connect(user1)
        .unpause()
      ).to.be.reverted;
    });

    it("set version", async () => {
      const { marketplace, deployer } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(deployer)
        .setVersion(25)
      ).to.emit(marketplace, 'VersionChanged')
      .withArgs(25);

      expect(await marketplace.version()).to.equal(25);
    });

    it("non owner cannot set version", async () => {
      const { marketplace, user1 } = await loadFixture(deployContractsFixture);
      await expect(marketplace
        .connect(user1)
        .setVersion(25)
      ).to.be.reverted;
    });
  });
});
