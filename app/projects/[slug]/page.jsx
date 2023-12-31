'use client'

import PageHeading from "@/components/elements/PageHeading"
import BackButton from "@/components/elements/BackButton"
import Container from "@/components/elements/Container"
import { SkeletonContent } from "@/components/elements/Skeleton"


import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { notFound } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ProjectDetailPage({ params }) {
  const [content, setContent] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isNotfound, setNotfound] = useState(false)

  useEffect(() => {

    const fetchContent = async () => {

      const response = await fetch(`/api/notion/${params.slug}`)

      if (response.status === 200) {
        const data = await response.json()
        setContent(data)
        setIsLoading(false)

      } else if (response.status === 404) {
        setNotfound(true)
      }
    }
    fetchContent()

  }, [])

  if (isNotfound) notFound()

  return (
    <>
      <Container>
        <BackButton />

        {isLoading ? (
          <SkeletonContent />
        ) : (
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <PageHeading title={content.title} description={content.description} />
              <ProjectDetail content={content} />
            </motion.div>
          </div>
        )}

      </Container>
    </>
  )
}

