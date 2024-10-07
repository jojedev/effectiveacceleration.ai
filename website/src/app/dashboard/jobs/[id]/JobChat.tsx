import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { renderEvent } from '@/components/Events';
import { CustomJobEvent, Job, JobArbitratedEvent, JobEventType, JobEventWithDiffs, JobState, User } from 'effectiveacceleration-contracts/dist/src/interfaces';
import { PostMessageButton } from '@/components/JobActions/PostMessageButton';
import Link from 'next/link';
import { title } from 'process';
import { zeroAddress, zeroHash } from 'viem';
import { DisputeButton } from '@/components/JobActions/DisputeButton';
import { ApproveButton } from '@/components/JobActions/ApproveButton';
import { AssignWorkerButton } from '@/components/JobActions/AssignWorkerButton';
import { formatTokenNameAndAmount, tokenIcon } from '@/tokens';
import JobChatStatus from './Components/JobChat/JobChatStatus';
import ProfileUserHeader from './Components/JobChat/ProfileUserHeader';
import JobChatEvents from './Components/JobChat/JobChat';

const JobChat = ({users, selectedWorker, events, job, address, addresses, sessionKeys} : 
{
    users: Record<string, User>, 
    selectedWorker: string, 
    events: JobEventWithDiffs[],    
    job: Job, 
    address: `0x${string}` | undefined,
    sessionKeys: Record<string, string>,
    addresses: string[]  
}) => {
    const lastEventType = events[events.length - 1]?.type_
    console.log(events, 'events')
  return (
    <div className='grid grid-rows-[74px_70%_10%] max-h-customHeader'>
        <ProfileUserHeader users={users} selectedWorker={selectedWorker}/>
        <JobChatEvents users={users} selectedWorker={''} events={events} job={job} address={address} />
        {job && <>
            {job.state !== JobState.Closed && address !== job.roles.arbitrator && addresses.length && Object.keys(sessionKeys).length > 0 &&
                <div className='row-span-1 flex flex-1 border border-gray-100'>
                    <PostMessageButton address={address} recipient={selectedWorker as `0x${string}`} addresses={addresses as any} sessionKeys={sessionKeys} job={job}/>
                </div>
            }
        </>
        }
    </div>
  )
}

export default JobChat