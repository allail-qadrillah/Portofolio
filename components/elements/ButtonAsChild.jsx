import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ButtonAsChild({ href, children }) {
  return (
    <Button asChild>
      <Link href={href}>{children}</Link>
    </Button>
  )
}
