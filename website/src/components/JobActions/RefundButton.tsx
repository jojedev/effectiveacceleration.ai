import { Button } from '@/components/Button';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Job } from 'effectiveacceleration-contracts';
import { MARKETPLACE_V1_ABI } from 'effectiveacceleration-contracts/wagmi/MarketplaceV1';
import Config from 'effectiveacceleration-contracts/scripts/config.json';
import { useEffect, useState } from 'react';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

export type RefundButtonProps = {
  address: `0x${string}` | undefined;
  job: Job;
};

export function RefundButton({
  address,
  job,
  ...rest
}: RefundButtonProps & React.ComponentPropsWithoutRef<'div'>) {
  const { data: hash, error, writeContract } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirmed || error) {
      if (error) {
        const revertReason = error.message.match(
          `The contract function ".*" reverted with the following reason:\n(.*)\n.*`
        )?.[1];
        if (revertReason) {
          alert(
            error.message.match(
              `The contract function ".*" reverted with the following reason:\n(.*)\n.*`
            )?.[1]
          );
        } else {
          console.log(error, error.message);
          alert('Unknown error occurred');
        }
      }
      setButtonDisabled(false);
    }
  }, [isConfirmed, error]);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  async function buttonClick() {
    setButtonDisabled(true);

    const w = writeContract({
      abi: MARKETPLACE_V1_ABI,
      address: Config.marketplaceAddress as `0x${string}`,
      functionName: 'refund',
      args: [job.id!],
    });
  }

  return (
    <>
      <Button
        disabled={buttonDisabled}
        onClick={buttonClick}
        color={'borderlessGray'}
        className={'w-full'}
      >
        <CheckIcon className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden='true' />
        Refund
      </Button>
    </>
  );
}
