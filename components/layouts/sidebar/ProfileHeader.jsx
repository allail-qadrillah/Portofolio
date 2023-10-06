import clsx from 'clsx';
import Image from '@/components/elements/Image';
import { PROFILE_URL, LINKTREE_URL } from '@/constant';
import Link from 'next/link';
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import ToolTips from '@/components/elements/Tooltip';
function ProfileHeader({ expandMenu, imageSize }) {
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <Image
        src={PROFILE_URL}
        alt="profile image"
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href='/' passHref>
          <h2 className='flex-grow text-lg lg:text-xl font-medium'>M Al Lail Qadrillah</h2>
        </Link>

        <ToolTips title="Verified">
          <VerifiedIcon size={20} className='text-blue-400' />
        </ToolTips>
      </div>

      <Link
        href={LINKTREE_URL}
        target='_blank'
        className="hidden lg:flex text-sm  text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300"
      >
        @mallailqadrillah
      </Link>
    </div>
  )
}

export default ProfileHeader