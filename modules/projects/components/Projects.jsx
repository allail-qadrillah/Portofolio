'use client'

import {ProjectCard, ProjectCard2} from "./ProjectCard"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, ChevronsUpDown, TerminalIcon } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Projects({ project_item }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [Projects, setProjects] = useState([])
  const Stacks = [...new Set(project_item.flatMap(project => project.stack))]

  useEffect(() => {
    // get stack from project
    if (value === "") {
      setProjects(project_item)
    } else {
      setProjects(
        project_item.filter(project => project.stack.includes(value))
      )
    }

  }, [value])

  return (
    <>
      <div className="flex items-center space-x-4">
        <TerminalIcon className='size-6 animate-pulse stroke-[1.5]' />
        <p className="font-mono text-xs md:text-sm text-muted-foreground">Tech Stack</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="font-mono w-[200px] justify-between"
            >
              {value
                ? Stacks.find((stack) => stack === value)
                : "Select stack..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." className="font-mono" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup className="font-mono">
                {Stacks.map((stack) => (
                  <CommandItem
                    key={stack}
                    onSelect={() => {
                      setValue(stack)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        " mr-2 h-4 w-4",
                        value === stack ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {stack}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        {/* <p className="text-sm text-muted-foreground">Total {Projects.length} Projects</p> */}
      </div>

      {/* <section className="grid sm:grid-cols-2 gap-5 pt-2"> */}
      <section className="flex flex-col gap-5 pt-2">
        {Projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ProjectCard2 {...project} />
              {/* <ProjectCard {...project} /> */}
            </motion.div>
            )
        })}
      </section>
    </>
  )
}
