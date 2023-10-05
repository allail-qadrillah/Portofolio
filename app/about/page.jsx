import Container from "@/components/elements/Container"
import PageHeading from "@/components/elements/PageHeading"
import About from "@/modules/about"

const PAGE_TITLE = "About"
const PAGE_DESCRIPTION = "A short story of me, not important but seem better than nothing."
export default function page() {
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container >
    </>
  )
}
