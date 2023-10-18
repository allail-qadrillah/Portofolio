import PageHeading from "@/components/elements/PageHeading"
import Container from "@/components/elements/Container"
import Dashboard from "@/modules/dashboard"

const PAGE_TITLE = "Dashboard"
const PAGE_DESCRIPTION = ""

export default function page() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </>
  )
}
