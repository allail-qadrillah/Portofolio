'use client'

import SectionHeading from "@/components/elements/SectionHeading"
import SectionSubHeading from "@/components/elements/SectionSubHeading"

import { BiCodeAlt as SkillsIcon } from 'react-icons/bi';
import { useEffect, useState } from "react";
import styled from '@emotion/styled';

import { STACKS } from "@/constant/stack";
import InfiniteLoopSlider from "@/components/elements/InfiniteLoopSlider";

const Tag = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700">
      {icon}
      <span>{title}</span>
    </div>
  )
}
export default function Skills() {
  const [shuffledSkills, setShuffledSkils] = useState([])

  useEffect(() => {
    const skillsArray = Object.entries(STACKS)
    const shufledArray = [...skillsArray].sort(() => Math.random() - 0.5)
    setShuffledSkils(shufledArray)
  }, [])

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    )
  })

  return (
    <div className="space-y-2">

      <SectionHeading title='Skills' icon={<SkillsIcon className="mr-1" />} />
      <SectionSubHeading>
        <p>My Coding Skills</p>
      </SectionSubHeading>

      <div className='flex w-full'>
        <div className='relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden'>
          {sliders}
          <StyledFade className='hidden dark:flex fade' />
        </div>
      </div>

    </div>
  )
}

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #121212,
    transparent 20%,
    transparent 80%,
    #121212
  );
  position: absolute;
  inset: 0;
`;
