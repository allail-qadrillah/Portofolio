import SectionHeading from "@/components/elements/SectionHeading"
import SectionSubHeading from "@/components/elements/SectionSubHeading"
import { CardWorkTogether } from "./CardWorkTogether"

export default function Services() {
  return (
    <div className="space-y-2">
      <SectionHeading title="What I' ve Been Working On" />
      <SectionSubHeading>
        <blockquote className="mt-2 mb-2 border-l-2 pl-6 dark:text-neutral-300 text-justify lg:text-lg text-base">
          I have <a className="underline decoration-dashed underline-offset-4 decoration-2  decoration-green-500">
            taken part in several competitions
          </a> in the field of technology to test my abilities and have <a className="underline decoration-dashed underline-offset-4 decoration-2 decoration-fuchsia-500">
            helped students create Bachelor's and Master's degree theses
          </a>.
        </blockquote>
      </SectionSubHeading>
      <CardWorkTogether />
    </div>
  )
}
