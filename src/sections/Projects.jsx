const projects = [
  {
    title: "Personal Website",
    description:
      "",
    href: "https://github.com/joycewdev/PersonalPortfolio",
    techStack: "React, Tailwind CSS",
  },
  {
    title: "Memory Match",
    description:
      "Interactive web app game where players flip over hidden cards and find matching pairs.",
    href: "https://github.com/joycewdev/MemoryMatch",
    techStack: "HTML, CSS, JavaScript",
  },
  {
    title: "Trailblazer",
    description:
      "GUI-based sidescroller game where players avoid obstacles as the speed increases.",
    href: "https://github.com/joycewdev/Trailblazer",
    techStack: "Java",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-3xl mx-auto px-6 pb-10">
      <p className="font-bold mb-4">Projects</p>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex justify-between items-center">
              <p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#767BBC] underline underline-offset-4 hover:text-[#474C90] transition-colors"
                >
                  {project.title}
                </a>
              </p>
              <p className="text-sm text-[#AAAEC7]">{project.techStack}</p>
            </div>
            <p className="text-sm text-[#4A4E69] mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
