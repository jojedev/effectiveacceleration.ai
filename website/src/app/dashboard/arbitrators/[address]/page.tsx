"use client";

import { Layout } from '@/components/Dashboard/Layout'
import { Link } from '@/components/Link'
import {
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import { useParams } from 'next/navigation';
import useArbitrator from '@/hooks/useArbitrator';


export default function ArbitratorPage() {
  const address = useParams().address as string;

  const { data: arbitrator } = useArbitrator(address as `0x${string}`);

  return (
    <Layout>
      <div className="">
        <div className="min-w-0 flex-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link href="/arbitrators" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    Arbitrators
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-400" aria-hidden="true" />
                  <Link href={`/arbitrators/${arbitrator?.address_}`} className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    { arbitrator?.address_ }
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
            <div className="relative">
              <img
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                src={arbitrator?.avatar}
                alt=""
              />
            </div>
            { arbitrator?.name }
          </h2>
          <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">
            { arbitrator?.bio }
          </h2>
        </div>
      </div>
    </Layout>
  );
}
