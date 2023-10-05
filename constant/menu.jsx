import {
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon
} from 'react-icons/bi';
import {
  BsDiscord as DiscordIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon
} from 'react-icons/bs';
import { LuWorkflow } from 'react-icons/lu';

const iconSize = 20;

export const MENU_ITEMS = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog'
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn'
  },
  {
    title: 'Roadmap',
    href: '/roadmap?tribe=frontend-developer',
    icon: <LuWorkflow size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Roadmap'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard'
  }
];

export const SOCIAL_MEDIA = [
  {
    title: 'Github',
    href: 'https://github.com/allail-qadrillah',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github'
  },
  {
    title: 'Linkedin',
    href: 'linkedin.com/in/m-al-lail-qadrillah',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/',
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Twitter'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/allailqadrillah_',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram'
  },
  {
    title: 'Threads',
    href: 'https://threads.net/@allailqadrillah_',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Threads'
  },
  {
    title: 'Discord',
    href: '',
    icon: <DiscordIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Discord'
  },
  {
    title: 'Youtube',
    href: '',
    icon: <YoutubeIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Youtube'
  },
  {
    title: 'TikTok',
    href: 'https://tiktok.com/@allailqadrillah_',
    icon: <TiktokIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Tiktok'
  }
];
