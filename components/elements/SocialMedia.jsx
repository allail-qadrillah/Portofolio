import Link from "next/link"

import clsxm from "@/lib/clsxm"

import ToolTips from "./ToolTip"
function SocialMedia({ items, isMePage }) {
  const dataAos = isMePage ? 'zoom-in-down' : ''
  return (
    <div data-aos={dataAos} className={clsxm('flex flex-col space-y-1', isMePage && 'items-center mt-6')}>
      <div className="text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">
        Let`s Connect
      </div>
      <div className={clsxm('flex justify-around space-x-2 lg:justify-between px-5 pt-2', isMePage && 'space-x-8')}>
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            target="_blank"
            data_umami-event={item?.eventName}
            aria-label={item?.title}
          >
            <ToolTips title={item?.title}>
              <div>
                {item?.icon}
              </div>
            </ToolTips>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia 