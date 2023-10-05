import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { DiRasberryPi, } from 'react-icons/di';
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPwa,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTensorflow,
  SiPython,
  SiFlask,
  SiNumpy,
  SiArduino,
  SiFastapi,
  SiMongodb,
  SiGit,
} from 'react-icons/si';

const iconSize = 24;

export const STACKS = {
  JavaScript: <SiJavascript size={iconSize} />,
  Python: <SiPython size={iconSize} />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} />,
  Bootstrap: (<BsFillBootstrapFill size={iconSize} />),
  Firebase: <SiFirebase size={iconSize} />,
  'Artificial Intelligence': (<BsRobot size={iconSize} />),
  'Node.js': <SiNodedotjs size={iconSize} />,
  PWA: <SiPwa size={iconSize} />,
  CSS: <SiCss3 size={iconSize} />,
  Socket: <SiSocketdotio size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
  Tensorflow: <SiTensorflow size={iconSize} />,
  Flask: <SiFlask size={iconSize} />,
  Numpy: <SiNumpy size={iconSize} />,
  'Raspberry Pi': <DiRasberryPi size={iconSize} />,
  Arduino: <SiArduino size={iconSize} />,
  FastApi: <SiFastapi size={iconSize} />,
  Mongodb: <SiMongodb size={iconSize} />,
  Git: <SiGit size={iconSize} />,
};
