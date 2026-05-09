import { tech } from "/src/data/tech.js";

export default function TechStack() {
  return (
    <section id="techstack" className="w-full max-w-3xl mx-auto px-6 pb-10">
      <p className="font-bold mb-4">Tech Stack</p>
      <div className="flex flex-wrap gap-3">
        {tech.map((tool) => {
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
