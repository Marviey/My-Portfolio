import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa"

import { SiTailwindcss, SiExpress, SiMongodb, SiVercel } from "react-icons/si"

const skills = [
  {
    title: "Frontend",
    tech: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Tools",
    tech: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
    ],
  },

  {
    title: "Currently Learning",
    tech: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },

  {
    title: "Deployment",
    tech: [
      { name: "Vercel", icon: SiVercel },
      { name: "GitHub", icon: FaGithub },
    ],
  },
]

export default skills
