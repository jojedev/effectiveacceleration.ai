'use client';
import {
  Job,
  JobEventWithDiffs,
  JobState,
  User,
} from 'effectiveacceleration-contracts';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import JobChatsList from '../JobChatsList';
import JobChat from '../JobChat';
import JobChatDetails from '../JobChatDetails';
import { JobViewProps } from '@/service/Interfaces';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { shortenText } from '@/utils/utils';

export default function GuestView({
  users,
  selectedWorker,
  events,
  job,
  address,
  addresses,
  sessionKeys,
  jobUsersData,
  setSelectedWorker,
  eventMessages,
  whitelistedWorkers,
}: JobViewProps) {
  const jobOwnerData = jobUsersData ? jobUsersData[job.roles.creator] : null;
  const ownerAddress = jobOwnerData?.address_ as `0x${string}` | undefined;
  return (
    <div className='grid min-h-customHeader grid-cols-4'>
      <div className='col-span-1 max-h-customHeader bg-white p-5'>
        <h1 className='font-bold'>{job.title}</h1>
        <span>{job.content}</span>
        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Customer
          </label>
          <div className='mt-1 flex items-center space-x-2'>
            <Image
              className='rounded-full object-cover'
              height={50}
              width={50}
              src={jobOwnerData?.avatar as string | StaticImport}
              alt='Profile picture'
            />
            {jobOwnerData?.name ? (
              <span>{jobOwnerData.name}</span>
            ) : (
              <span>
                {shortenText({ text: ownerAddress, maxLength: 12 }) || ''}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className='col-span-2 max-h-customHeader bg-white'>
        {job && (
          <JobChat
            users={users}
            selectedWorker={selectedWorker}
            eventMessages={eventMessages}
            job={job}
            address={address}
            addresses={addresses}
            sessionKeys={sessionKeys}
            jobUsersData={jobUsersData}
          />
        )}
      </div>
      <div className='col-span-1 max-h-customHeader overflow-y-auto bg-white'>
        <JobChatDetails
          job={job}
          users={users}
          address={address}
          sessionKeys={sessionKeys}
          addresses={addresses}
          events={events}
          whitelistedWorkers={whitelistedWorkers}
        />
      </div>
    </div>
  );
}
