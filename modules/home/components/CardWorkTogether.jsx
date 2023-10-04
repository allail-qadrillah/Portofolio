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
        <CardDescription className="text-lg dark:text-neutral-300"> I&apos;m open for Fulltime Job and freelance projects, feel free to email me to see how
          can we collaborate.</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonAsChild href="/contact">Contact me</ButtonAsChild>
      </CardFooter>
    </Card>

  )
}
