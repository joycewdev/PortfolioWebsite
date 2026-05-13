import { projects } from "/src/data/projects.js";

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
            <p className="text-sm mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
