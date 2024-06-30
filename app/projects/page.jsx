"use client"

import PageHeading from "@/components/elements/PageHeading"
import Container from "@/components/elements/Container"
import { SkeletonCard } from "@/components/elements/Skeleton"
import Projects from "@/modules/projects"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"


const PAGE_TITLE = "Project"
const PAGE_DESCRIPTION = "Several projects that I have worked on, for showcasing my skils."

export default function Page() {
  const [pages, setPages] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchPages = async () => {
      const response = await fetch('/api/notion')
      const data = await response.json()

      setPages(data)
      setIsLoading(false)
    }

    fetchPages()
  }, [])

  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Projects project_item={pages} />
          </motion.div>
        )}
      </Container>
    </>
  )
}
