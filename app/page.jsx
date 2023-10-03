import Container from "@/components/elements/Container"
import Home from "@/modules/home"
import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'
export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
      <Home />
      </Container>
    </>
  )
}