import Breakline from "@/components/elements/Breakline"
import Introduction from "./Introduction"
import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'
export default function Home() {
  return (
    <>
      <Introduction />
      <Breakline />
      <div>
        <div className='flex gap-2 font-bold text-4xl'>
          <h1> Hi, I&apos;m Alil</h1>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
      </div>
    </>
  )
}
