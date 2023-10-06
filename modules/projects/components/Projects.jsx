'use client'

import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Check, ChevronsUpDown } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"





const dummy_project = [
  {
    title: "projek 1", slug: 'bla', description: "another life",
    image: "https://res.cloudinary.com/dmt5jx75a/image/upload/v1696577638/Web%20Portofolio/h2xbe6bjouaeuumtsswt.jpg",
    stack: ['Python'], is_featured: true, is_public: true
  },
  {
    title: "projek 2", slug: 'bla bla', description: "on another life",
    image: "https://res.cloudinary.com/dmt5jx75a/image/upload/v1696577638/Web%20Portofolio/h2xbe6bjouaeuumtsswt.jpg",
    stack: ['JavaScript', 'Next.js', 'Python'], is_featured: false, is_public: false
  },
]
export default function Projects() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [Projects, setProjects] = useState([])
  const Stacks = [...new Set(dummy_project.flatMap(project => project.stack))]

  // setProject(dummy_project)
  useEffect(() => {
    // get stack from project
    if (value === "") {
      setProjects(dummy_project)
    } else {
      setProjects(
        dummy_project.filter(project => project.stack.includes(value))
      )
    }

    return () => {
      // second
    }
  }, [value])

  return (
    <>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Tech Stack</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? Stacks.find((stack) => stack === value)
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
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
                        "mr-2 h-4 w-4",
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
      </div>

      <section className="grid sm:grid-cols-2 gap-5 pt-2">
        {Projects.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>)
        })}
      </section>
    </>
  )
}