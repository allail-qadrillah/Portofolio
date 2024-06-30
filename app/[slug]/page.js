"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

import PageHeading from "@/components/elements/PageHeading"
import BackButton from "@/components/elements/BackButton"
import Container from "@/components/elements/Container"
import { SkeletonContent } from "@/components/elements/Skeleton"
import NotionPage from "@/components/elements/NotionPage"


export default function Page() {
  const [content, setContent] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isNotfound, setNotfound] = useState(false)
  const pathName = usePathname()


  useEffect(() => {

    const fetchContent = async () => {
      const id = pathName.substring(1) // Remove the leading slash
      const response = await fetch(`/api/notion/get-page-id/${id}`)

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
              <NotionPage recordMap={content.record_map} />
            </motion.div>
          </div>
        )}

      </Container>
    </>
  )
}
