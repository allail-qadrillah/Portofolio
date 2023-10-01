'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useState } from "react"
import { BsArrowRightShort as ExternalLinkIcon } from "react-icons/bs"

import { useMenu } from "@/context/menu"

function MenuItem({ title, href, icon, onClick, className = '', children }) {
  const [isHovered, setIsHovered] = useState(false)
  const isHashLink = href === '#'
  const isExternalUrl = href?.includes('http');
  const { hideMenu } = useMenu()
  const pathName = usePathname()
  const url = new URL(href, 'http://localhost:3000/')

  const activeClasses = `flex items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg ${pathName === url.pathname
    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-300'
    : 'hover:dark:lg:bg-neutral-800 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300'
    }`;

  const handleClick = () => {
    hideMenu()
    if (onClick) onClick();
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }
  const itemComponent = () => {
    return (
      <div {...elementProps}>
        <div>{icon}</div>
        <div className="flex-grow ml-0.5">{title}</div>
        {children && <>{children}</>}
        {isExternalUrl && isHovered && (
          <ExternalLinkIcon size={22} className="text-gray-500 -rotate-45 lg:transition-all lg:duration-300" />
        )}
      </div>
    )
  }

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link aria-label={title}
      href={href} tabIndex={0}
      target={isExternalUrl ? '_blank' : ''}
      onClick={handleClick}>
      {itemComponent()}
    </Link>
  )
}

export default MenuItem