import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BiRocket as RocketIcon } from 'react-icons/bi';
import { ButtonAsChild } from "@/components/elements/ButtonAsChild";

export function CardWorkTogether({ className }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2">
          <RocketIcon size={24} />
          <CardTitle>Lets work together!</CardTitle>
        </div>
        <CardDescription className="lg:text-lg text-base text-justify dark:text-neutral-300">
          I&apos;m open for fulltime job and freelance projects.
          feel free to email me and see how can we collaborate 🤟
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonAsChild href="mailto:qadrillahengineering@gmail.com" target="_blank">Contact me</ButtonAsChild>
      </CardFooter>
    </Card>

  )
}
