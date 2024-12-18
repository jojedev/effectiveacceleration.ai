import React, { useState } from 'react';
import JobsTable from './JobsTable';
import { TOpenJobTable } from '@/service/JobsService';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from '@tanstack/react-table';
import { columnBuilder } from '@/components/TablesCommon';
import { Job } from 'effectiveacceleration-contracts/dist/src/interfaces';
import Link from 'next/link';

const columnHelper = createColumnHelper<TOpenJobTable>();
const columns = [
  columnBuilder(columnHelper, 'jobName', 'Job Name'),
  columnBuilder(columnHelper, 'description', 'Assigned to'), // TODO these seem wrong
  columnBuilder(columnHelper, 'tag', 'Progress'), // TODO these seem wrong
  columnBuilder(columnHelper, 'actions', 'Actions'),
];

export const WorkerApplicationsJobs = ({
  filteredJobs,
  localJobs,
}: {
  filteredJobs: Job[];
  localJobs: Job[];
}) => {
  const defaultData: TOpenJobTable[] = filteredJobs.map(
    (job) => ({
      jobName: <span className='font-bold'>{job.title}</span>,
      description: <span className='font-md'>{job.roles.worker ?? ''}</span>,
      tag: (
        <span className='rounded-full bg-[#E1FFEF] px-3 py-2 text-[#23B528]'>
          {job.tags[1] ?? ''}
        </span>
      ),
      actions: (
        <Link href={`/dashboard/jobs/${job.id?.toString()}`}>
          <span className='font-md font-semibold text-primary underline'>
            View Details
          </span>
        </Link>
      ),
    })
  );

  const [data, setData] = useState(() => defaultData);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <JobsTable
      table={table}
      localJobs={localJobs}
      title='Job Aplications'
      emptyMessage='No job applications found'
      emptySubtext='Apply to more jobs to see them here'
    />
  );
};
