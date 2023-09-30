'use client';

import clsx from 'clsx';
import { useMenu } from '@/context/menu';
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
function Profile() {
  const { isOpen, toggleMenu } = useMenu()
  const isMobile = useIsMobile()
  const imageSize = isMobile ? 40 : 100;

  console.log(isMobile)
  useEffect(() => {
    console.log(isOpen)
    console.log(document.body.style.overflow)

  }, [isOpen])

  return (
    <div
      className={clsx(
        'z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0',
        isOpen && 'pb-0'
      )}
    >
      <div className='flex items-start justify-between lg:flex-col lg:space-y-4 '>
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
      </div>
    </div>
  )
}

export default Profile