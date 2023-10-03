import './globals.css'

import ThemeProviderContext from "@/context/theme"
import NextTopLoader from "nextjs-toploader"
import Layouts from "@/components/layouts"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['greek'],
  display: 'swap',
})

export const metadata = {
  title: 'M Al Lail Qadrillah | Personal Website',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.className}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
      </body>
    </html>
  )
}
