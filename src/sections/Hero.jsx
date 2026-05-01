export default function Hero() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-5">
      <h1 id="name" className="text-5xl leading-tight mb-3">
        Joyce Wang
      </h1>
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
      <p className="text-sm text-[#4a4e69] pt-2">
        <a
          href="/archive"
          className="hover:cursor-pointer hover:text-[#474C90] transition-colors"
        >
          Building, exploring, running, reading
        </a>
        {" "}• Seeking Summer 2027 Internships
      </p>
    </section>
  );
}
