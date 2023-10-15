
import PageHeading from "@/components/elements/PageHeading"
import BackButton from "@/components/elements/BackButton"
import Container from "@/components/elements/Container"
import { getPageBySlug, getPageContent } from "@/lib/notion_projects"

import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { notFound } from "next/navigation"

export default async function ProjectDetailPage({ params }) {
  const page = await getPageBySlug(params.slug)
  if (!page) notFound()

  const content = await getPageContent(page.id)

  return (
    <>
      <Container>
        <BackButton />
        <PageHeading title={content.title} description={content.description}/>
        <ProjectDetail content={...content} />
      </Container>
    </>
  )
}

