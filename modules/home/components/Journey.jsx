import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

import Link from 'next/link'

import SectionHeading from "@/components/elements/SectionHeading"
import SectionSubHeading from "@/components/elements/SectionSubHeading"

import { CV_URL } from '@/constant'

import { TimeLine } from '@/modules/home/components/TimeLine';
export default function Journey() {
  return (
    <div className="space-y-2">
      <SectionHeading title='Journey' icon={<CareerIcon className='mr-1' />} />
      <SectionSubHeading>
        <p className="dark:text-neutral-400"></p>
        <Link
          href={CV_URL}
          target="_blank"
          passHref
          className="flex gap-2 items-center hover:gap-3 duration-300 text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
        >
          <DownloadIcon/>
          <span>Download Resume</span>
        </Link>
      </SectionSubHeading>

      <TimeLine/>
    </div>
  )
}
