import Container from "@/components/elements/Container"
import Home from "@/modules/home"
import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'
export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
      
        <div className="flex justify-between items-center">
          <div className="flex gap-2 font-bold text-4xl">
            <h1> Hi, I&apos;m Alil</h1>
            <div className="ml-1 animate-waving-hand">👋</div>
          </div>
          <Link href="/" target="_blank" aria-label="buy-me-cofey">
            <TbCoffee size={25} />
          </Link>
        </div>

        <Home />
      </Container>
    </>
  )
}