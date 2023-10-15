import Link from "next/link"

import ToolTips from "@/components/elements/Tooltip"
import Image from '@/components/elements/Image';
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { STACKS } from "@/constant/stack"
import {
  AiFillPushpin as Pinned,
  AiFillGithub as Github
} from "react-icons/ai"

export default function ProjectCard({
  title, slug, description, image, stack, type, is_featured, is_public }) {

  const trimmedContent = description.slice(0, 63) + (description.length > 70 ? '...' : '');


  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%]">
        {is_featured && (
          <div className="absolute top-0 right-0 bg-emerald-300 text-emerald-950 text-[13px]  py-1 px-2 rounded-tr-xl rounded-bl-lg z-[2]">
            <div className="flex items-center gap-2 text-base">
              <Pinned /> Featured
            </div>
          </div>
        )}

        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          rounded="rounded"
          className="lg:hover:scale-105"
        />

        <div className="p-5">
          <div className="text-2xl font-bold text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {title}
          </div>
          <p className="text-sm mb-2 text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {trimmedContent}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {type?.map((type, index) => (
              <Badge className={`bg-${type.color}-200 text-neutral-700 dark:text-neutral-900 hover:bg-${type.color}-800`} key={index}>
                {type.name}
              </Badge>
            ))}
          </div>



          <div className="flex mt-2 flex-wrap items-center gap-3">
            {stack?.map((stack, index) => (
              <div key={index} className="w-6">
                <ToolTips title={stack}>{STACKS[stack]}</ToolTips>
              </div>
            ))}
          </div>

          {is_public ? (
            <Badge className="gap-2 "> <Github /> Public </Badge>
          ) : (
            <Badge className="gap-2 "> <Github /> Private </Badge>
          )}
        </div>
      </Card>
    </Link>
  )
}
