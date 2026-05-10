import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-5 group">
      <a href="/life">
        <h1 id="name" className="text-5xl leading-tight mb-3 cursor-pointer">
          Joyce Wang
          <span className="inline-block ml-2 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            <MdArrowOutward className="text-3xl text-[#4A4E69]" />
          </span>
        </h1>
      </a>
      <div className="flex gap-2">
        <p>
          CS + Bio Minor @&nbsp;
          <a
            href="https://www.mcmaster.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#767BBC] underline underline-offset-4 hover:text-[#474C90] transition-colors"
          >
            McMaster University
          </a>
        </p>
      </div>
      <p className="text-sm pt-2">
        IT @ York Region • Seeking Summer 2027 Internships
      </p>
    </section>
  );
}
