import { useState, useEffect } from 'react';
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { ethers } from 'ethers';
import Config from 'effectiveacceleration-contracts/scripts/config.json';
import ERC20Abi from '@/abis/ERC20.json';
import { Button } from '@/components/Button';

export function ApproveButton({
  token,
  to,
  updateNeedsAllowance,
}: {
  token: `0x${string}`;
  to: `0x${string}`;
  updateNeedsAllowance: (a: boolean) => void;
}) {
  const { address } = useAccount();
  const [showApprove, setShowApprove] = useState(false);
  const [approveButtonDisabled, setApproveButtonDisabled] = useState(false);

  const {
    data: allowanceData,
    isError: allowanceIsError,
    isLoading: allowanceIsLoading,
  } = useReadContract({
    address: token,
    abi: ERC20Abi,
    functionName: 'allowance',
    args: [address, to],
  });

  const {
    data: approveHash,
    isPending: approveIsPending,
    writeContract: approveWrite,
  } = useWriteContract();

  const {
    data: approveTxData,
    isError: approveTxIsError,
    isLoading: approveTxIsLoading,
  } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  function clickApprove() {
    async function f() {
      setApproveButtonDisabled(true);
      approveWrite?.({
        address: token,
        abi: ERC20Abi,
        functionName: 'approve',
        args: [
          to,
          BigInt(ethers.MaxUint256.toString()), // max allowance
        ],
      });

      setApproveButtonDisabled(false);
    }

    f();
  }

  /*
  useEffect(() => {
    if (approveTxData) {
      setShowApprove(false);
      updateNeedsAllowance(false);
      return;
    }

    if (allowanceData && (allowanceData as ethers.BigNumberish).lt(ethers.utils.parseUnits('5', 18))) {
      setShowAllowanceIncrease(true);
      updateNeedsAllowance(true);
    } else {
      setShowAllowanceIncrease(false);
      updateNeedsAllowance(false);
    }
  });
  */

  return (
    <div className={!showApprove ? 'hidden' : ''}>
      <Button disabled={approveButtonDisabled} onClick={clickApprove}>
        {approveTxIsLoading ? 'Waiting...' : 'Approve'}
      </Button>
    </div>
  );
}
