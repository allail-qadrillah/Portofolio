import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-bold text-4xl">
          <h1> Hi, I&apos;m Alil</h1>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <Link href="/" target="_blank" aria-label="buy-me-cofey">
          <TbCoffee size={25} />
        </Link>
      </div>
      <div className="mt-2 space-y-4">
        <ul className="flex flex-col gap-1 lg:flex-row lg:gap-8 ml-5 text-neutral-500 dark:text-neutral-400">
          <li>🔹Deep Learning & Software Engineering enthusiast</li>
          <li>🔹Based in Banda Aceh <span className="ml-1">🇮🇩</span></li>
        </ul>
        <p className="mt-4 leadinf-[1.8] md:leading-loose text-justify text-neutral-800 dark:text-neutral-300">
          <a className="underline decoration-wavy underline-offset-4 decoration-2 decoration-indigo-500">
            passionate about AI especially on Computer Vision
          </a> and <a className="underline decoration-wavy underline-offset-4 decoration-2  decoration-pink-500">
            experienced Software Engineering with a strong focus on Backend development.</a> Proficient in <a className="underline decoration-solid decoration-blue-400 decoration-2">
            Python</a> and <a className="underline decoration-solid decoration-orange-400 decoration-2">
            JavaScript</a>. Collaborative team player dedicated to delivering efficient Software and intelligent AI.
        </p>

      </div>
    </section>
  )
}
