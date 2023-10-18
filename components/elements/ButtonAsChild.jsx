import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ButtonAsChild({ href, target, children }) {
  return (
    <Button asChild>
      <Link href={href} target={target}>{children}</Link>
    </Button>
  )
}
