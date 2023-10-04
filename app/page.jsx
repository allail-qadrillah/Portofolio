import Container from "@/components/elements/Container"
import Home from "@/modules/home"

export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
      <Home />
      </Container>
    </>
  )
}