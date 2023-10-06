import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ToolTips from "@/components/elements/Tooltip"
import { STACKS } from "@/constant/stack"
import {
  AiFillPushpin as Pinned,
  AiFillGithub as Github
} from "react-icons/ai"

export default function ProjectCard({
  title, slug, description, image, stack, is_featured, is_public }) {

  return (
    <Link href={`/project/${slug}`}>
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
          width={600}
          height={200}
          alt={title}
          className="rounded-t-xl h-60 object-cover object-left"
        />
        <div className="p-5 space-y-2">
          <div className="text-2xl text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {title}
          </div>
          <p className="text-lg text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
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
