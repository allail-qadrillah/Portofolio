'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"

import { FiArrowLeftCircle as BackButtonIcon } from 'react-icons/fi';

export default function BackButton() {
  const router = useRouter()
  return (
    <div className="w-fit">
      <div onClick={() => router.back()} className="flex gap-2 hover:gap-3 cursor-pointer pb-5 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400">
        <BackButtonIcon size={20} data-testid="back-icon" />
        <span>Back</span>
      </div>
    </div>
  )
}
