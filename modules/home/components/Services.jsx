import SectionHeading from "@/components/elements/SectionHeading"
import SectionSubHeading from "@/components/elements/SectionSubHeading"
import { CardWorkTogether } from "./CardWorkTogether"

export default function Services() {
  return (
    <div className="space-y-2">
      <SectionHeading title="What I' ve Been Working On" />
      <SectionSubHeading>
        <blockquote className="mt-2 mb-2 border-l-2 pl-6 dark:text-neutral-300 text-lg">
          I assist brands, companies, institutions, and startups in creating exceptional digital experiences for their businesses through strategic development services.
        </blockquote>
      </SectionSubHeading>
      <CardWorkTogether />
    </div>
  )
}
