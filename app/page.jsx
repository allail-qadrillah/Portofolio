import Container from "@/components/elements/Container"
import Home from "@/modules/home"
import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'
export default async function HomePage() {
  return (
    <>
      <Container data-aos="fade-up">
      <Home />

        {/* {css text and wave hand animation works when used in this component} */}
        {/* <div className='flex gap-2 font-bold text-4xl'>
          <h1> Hi, I&apos;m Alil</h1>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div> */}
      </Container>
    </>
  )
}