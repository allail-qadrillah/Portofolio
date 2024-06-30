import Link from "next/link"

import ToolTips from "@/components/elements/Tooltip"
import Image from '@/components/elements/Image';
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { STACKS } from "@/constant/stack"
import {
  AiFillPushpin as Pinned,
  AiFillGithub as Github
} from "react-icons/ai"
import { ArrowUpRightIcon, LinkIcon } from 'lucide-react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from '@/components/ui/tooltip'

export function ProjectCard2({
  title, slug, description, image, stack, type, is_featured, is_public
}) {
  // const trimmedContent = description.slice(0, 63) + (description.length > 70 ? '...' : '');
  console.log(title, slug, description, image, stack, type, is_featured, is_public)
  return (
    <div>
      <Card key={title} className='flex flex-col border shadow w-full'>
        <CardHeader className='flex flex-col space-y-2 p-4'>
          <CardTitle className='text-xl dark:text-neutral-100 text-neutral-900'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={`/projects/${slug}`}
                    rel='noreferrer'
                    className='inline-flex items-center hover:underline group underline-offset-4 gap-2'
                    // target='_blank'
                  >
                    <h3>{title}</h3>
                    <ArrowUpRightIcon className='size-4 text-neutral-500 dark:group-hover:text-neutral-100 group-hover:text-neutral-900' />
                  </a>

                </TooltipTrigger>
                {image &&
                  <TooltipContent className='p-1' side='bottom'>
                    <Image
                      className='rounded object-fill max-w-xs w-full mx-auto'
                      width={1920}
                      height={1280}
                      src={image}
                      alt={title}
                      loading='lazy'
                    />
                  </TooltipContent>
                }
              </Tooltip>
            </TooltipProvider>
          </CardTitle>

          <CardDescription className='font-mono dark:text-neutral-400 text-neutral-600'>
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className='flex flex-col space-y-6 p-4 pt-0'>
          <div className='flex flex-wrap gap-2'>
            {stack?.map((stack, index) => (
              <Badge
                key={index}
                className='p-1 gap-1 rounded-md shadow size-4'
                variant='secondary'
              >
                {STACKS[stack]}
                <span className='text-xs'>{stack}</span>
              </Badge>
            ))}
          </div>
          <div className="w-full">
            <Button
              variant='default'
              size={null}
              className='p-2 shadow w-full md:w-auto'
              asChild
            >
              <a
                href={`/projects/${slug}`}
                rel='noreferrer'
                className='flex items-center justify-center md:justify-start gap-2'
              >
                <LinkIcon className='size-4' />
                <p>Preview</p>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
export function ProjectCard({
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
          <div className="text-2xl text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {title}
          </div>
          <p className="text-lg mb-2 text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {trimmedContent}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {type?.map((type, index) => (
              <Badge className={`bg-${type.color}-200 text-neutral-700 dark:text-neutral-900 hover:bg-${type.color}-800`} key={index}>
                {type.name}
              </Badge>
            ))}
          </div>

          <div className="flex mt-2 mb-2 flex-wrap items-center gap-3">
            {stack?.map((stack, index) => (
              <div key={index} className="w-6">
                <ToolTips title={stack}>{STACKS[stack]}</ToolTips>
              </div>
            ))}
          </div>

          {is_public ? (
            <Badge variant="secondary" className="gap-2 "> <Github /> Public </Badge>
          ) : (
            <Badge variant="secondary" className="gap-2 "> <Github /> Private </Badge>
          )}
        </div>
      </Card>
    </Link>
  )
}
