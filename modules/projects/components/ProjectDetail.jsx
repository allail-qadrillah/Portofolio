import ProjectLink from "@/components/elements/ProjectLink";
import NotionPage from "@/components/elements/NotionPage"
import ToolTips from "@/components/elements/Tooltip";
import Image from '@/components/elements/Image';
import { STACKS } from "@/constant/stack"

import { Badge } from "@/components/ui/badge"

export default function ProjectDetail({ content }) {
  return (
    <div className="space-y-4">
      {/* <div className="flex flex-col lg:flex-row sm:flex-row items-start lg:items-center  gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1 text-neutral-700 dark:text-neutral-300">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {content.stack?.map((stack, index) => (
              <div key={index} className="w-6">
                <ToolTips title={stack.value}>{STACKS[stack.value]}</ToolTips>
              </div>
            ))}
          </div>
        </div>

        <ProjectLink title={content.title} link_github={content.github} />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {content.type?.map((type, index) => (
          <Badge className={`bg-${type.color}-200 text-neutral-700 dark:text-neutral-900 hover:bg-${type.color}/800`} key={index}>
            {type.value}
          </Badge>
        ))}
      </div> */}

      {content.image &&
        <Image
          src={content.image}
          alt={content.title}
          width={800}
          height={400}
          rounded="rounded"
          className="lg:hover:scale-105"
        />
      }

      <NotionPage recordMap={content.record_map} />
    </div>
  )
}
