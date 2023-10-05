import { ABOUT } from "@/constant/about"

export default function Story() {
  return (
    <section 
      className="text-lg space-y-4 leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300"
    dangerouslySetInnerHTML={{ __html: ABOUT }}
    />
  )
}
