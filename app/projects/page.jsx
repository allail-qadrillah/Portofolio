"use client"

import PageHeading from "@/components/elements/PageHeading"
import Container from "@/components/elements/Container"
import Projects from "@/modules/projects"

// import { getPages } from "@/lib/notion_projects"
import { useEffect, useState } from "react"

const PAGE_TITLE = "Project"
const PAGE_DESCRIPTION = "Several projects that I have worked on, both private & open source for showcasing my passion on technology and problem-solving through code."

export default function page() {
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
          <p>loading</p>
        ) : (
          <Projects project_item={pages} />
        )}
      </Container>
    </>
  )
}
