'use client'

import SectionHeading from "@/components/elements/SectionHeading"
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { TIKTOK_USERNAME } from "@/constant/tiktok";

import { SiTiktok as TikTokIcon } from 'react-icons/si';

import Link from "next/link";
import { useEffect } from "react";

const TIKTOK_URL = `https://www.tiktok.com/${TIKTOK_USERNAME}`
const TIKTOK_URL_TO_CREATOR_EMBED = `https://www.tiktok.com/${TIKTOK_USERNAME}?refer=creator_embed`
function Tiktok() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <>
      <SectionHeading title='Tiktok' icon={<TikTokIcon className="mr-1" />} />
      <SectionSubHeading>
        <p className="text-neutral-600 dark:text-neutral-400">Find me on Tiktok</p>
        <Link
          href={TIKTOK_URL}
          target="_blank"
          passHref
          className="text-neutral-600 dark:text-neutral-400"
        >
          {TIKTOK_USERNAME}
        </Link>
      </SectionSubHeading>

      <blockquote
        className="tiktok-embed"
        cite={TIKTOK_URL}
        data-unique-id={TIKTOK_USERNAME}
        data-embed-type="creator"
        style={{ maxWidth: '780px', minWidth: '288px' }}
      >
        <section>
          <a target="_blank" href={TIKTOK_URL_TO_CREATOR_EMBED}>
            @{TIKTOK_USERNAME}
          </a>
        </section>
      </blockquote>

    </>
  )
}

export default Tiktok