import {
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiEclipseide, SiJira, SiLatex } from "react-icons/si";

const techData = [
  { label: "JavaScript", icon: FaJs },
  { label: "React", icon: FaReact },
  { label: "Java", icon: FaJava },
  { label: "Python", icon: FaPython },
  { label: "SQL", icon: TbSql },
  { label: "HTML", icon: FaHtml5 },
  { label: "CSS", icon: FaCss3Alt },
  { label: "Tailwind CSS", icon: RiTailwindCssFill },
  { label: "LaTeX", icon: SiLatex },
  { label: "Git", icon: FaGitAlt },
  { label: "Figma", icon: FaFigma },
  { label: "VS Code", icon: VscVscode },
  { label: "Eclipse", icon: SiEclipseide },
  { label: "Jira", icon: SiJira },
];

export default function TechStack() {
  return (
    <section id="techstack" className="w-full max-w-3xl mx-auto px-6 pb-10">
      <p className="font-bold mb-4">Tech Stack</p>
      <div className="flex flex-wrap gap-3">
        {techData.map((tool) => {
          const Icon = tool.icon;
          return (
            <span
              key={tool.label}
              className="flex items-center gap-2 bg-[#F5F7FF] text-sm text-[#4a4e69] px-3 py-1.5 rounded-md select-none hover:cursor-default hover:bg-[#EFF1FF] hover:text-black transition-colors"
            >
              <Icon />
              {tool.label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
