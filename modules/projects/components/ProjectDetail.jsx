import ProjectLink from "@/components/elements/ProjectLink";
import NotionPage from "@/components/elements/NotionPage"
import ToolTips from "@/components/elements/Tooltip";
import Image from '@/components/elements/Image';
import { STACKS } from "@/constant/stack"
export default function ProjectDetail({ content }) {
  console.log(content)
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
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
        <ProjectLink title={content.title} link_github={content.github}/>

      </div>
      <Image
        src={content.image}
        alt="profile image"
        width={800}
        height={400}
        rounded="rounded"
        className="lg:hover:scale-105"
      />
      <NotionPage recordMap={content.record_map} />
    </>
  )
}
