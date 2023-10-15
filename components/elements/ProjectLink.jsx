import Link from 'next/link';

import { BsGithub as GithubIcon } from 'react-icons/bs';

export default function ProjectLink({ title, link_github }) {
  const LinkComponent = ({ url, text, icon }) => {
    const eventName = `Click ${text} - Project ${title}`;

    return (
      <Link href={url} target="_blank" passHref data-umami-event={eventName}>
        <div className="flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 ">
          {icon}
          <span className="text-[15px] dark:text-teal-500 hover:dark:text-teal-400 transition-all duration-300">
            {text}
          </span>
        </div>
      </Link>
    );
  };
  
  return (
    <div className="flex gap-4">
      {link_github && <LinkComponent url={link_github} text="Source Code" icon={<GithubIcon size={22} />} />}
    </div>
  )
}
