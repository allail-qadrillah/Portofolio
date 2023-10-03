import Link from "next/link"
import { TbCoffee } from 'react-icons/tb'

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1> Hi, I&apos;m Alil</h1>
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <Link href="/" target="_blank" aria-label="buy-me-cofey">
          <TbCoffee size={25} />
        </Link>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col gap-1 lg:flex-row lg:gap-8 ml-5 text-neutral-500 dark:text-neutral-400">
          <li>🔹Deep Learning & Software Engineering enthusiast</li>
          <li>🔹Based in Banda Aceh <span className="ml-1">🇮🇩</span></li>
        </ul>
        <p className="leadinf-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in
          TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web applications.
        </p>
      </div>
    </section>
  )
}