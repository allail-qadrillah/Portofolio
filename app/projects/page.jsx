import PageHeading from "@/components/elements/PageHeading"
import Container from "@/components/elements/Container"
import Projects from "@/modules/projects"

import { getPages } from "@/lib/notion_projects"

const PAGE_TITLE = "Project"
const PAGE_DESCRIPTION = "Several projects that I have worked on, both private & open source for showcasing my passion on technology and problem-solving through code."


export default async function page() {
  const pages = await getPages()

  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects project_item={pages}/>
      </Container>
    </>
  )
}
