'use client'

import { useSearchParams } from "next/navigation"

export default function Container({children, className = '',...others}) {
  const searchParams = useSearchParams()
  const readMode = searchParams.get('readMode')
  
  return (
    <div className={`mb-10 ${readMode !== 'true' && 'mt-20'} lg:mt-0 p-8 ${className} `} {...others}>
      {children}
    </div>
  )
}
