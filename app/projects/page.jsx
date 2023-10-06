import PageHeading from "@/components/elements/PageHeading"
import Container from "@/components/elements/Container"
import Projects from "@/modules/projects"

const PAGE_TITLE = "Project"
const PAGE_DESCRIPTION = "Several projects that I have worked on, both private & open source for Showcasing my passion for technology and problem-solving through code."
export default function page() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects />
      </Container>
    </>
  )
}
