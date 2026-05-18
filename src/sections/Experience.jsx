import { useState } from "react";
import { professionalExperiences } from "/src/data/experiences.js";
import { extracurricularExperiences } from "/src/data/experiences.js";

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("Professional");
  const currentData =
    activeTab === "Professional"
      ? professionalExperiences
      : extracurricularExperiences;

  return (
    <section id="experience" className="w-full max-w-3xl mx-auto px-6 py-10">
      <p className="font-bold tracking-wide mb-4">Experience</p>

      {/* Professional and Extracurricular Tabs */}
      <div className="flex gap-3 mb-4 select-none">
        <button
          onClick={() => setActiveTab("Professional")}
          className={`text-sm px-3 py-1 rounded transition-colors cursor-pointer ${
            activeTab === "Professional"
              ? "bg-[#EFF1FF] italic font-medium"
              : "bg-[#F5F7FF] hover:bg-[#EFF1FF] hover:text-black"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("Extracurricular")}
          className={`text-sm px-3 py-1 rounded transition-colors cursor-pointer ${
            activeTab === "Extracurricular"
              ? "bg-[#EFF1FF] italic font-medium"
              : "bg-[#F5F7FF] hover:bg-[#EFF1FF] hover:text-black"
          }`}
        >
          Extracurricular
        </button>
      </div>

      <div className="flex flex-col">
        {currentData.map((experience, i) => {
          return (
            <div key={`${activeTab}-${i}`} className="w-full cursor-default">
              <div className="group cursor-default">
                <div className="flex items-start mb-3 gap-3 md:gap-2">
                  <img
                    src={`/src/assets/logos/${experience.img}`}
                    alt={`${experience.organization} logo`}
                    className="w-8 h-8 mt-2 md:w-6 md:h-6 md:mt-0 rounded-sm select-none"
                  />
                  <div className="flex flex-col w-full md:flex-row md:justify-between md:items-center md:gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1">
                      <a
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#767BBC] hover:text-[#474C90] transition-colors"
                      >
                        {experience.organization}
                      </a>
                      <p>{experience.role.title}</p>
                    </div>
                    <p className="text-sm text-[#AAAEC7]">
                      {experience.role.startDate}
                      {experience.role.endDate
                        ? ` — ${experience.role.endDate}`
                        : ""}
                    </p>
                  </div>
                </div>
                <DescriptionList description={experience.role.description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Hoverable description list for each role
function DescriptionList({ description }) {
  const points = (description ?? "")
    .split("`")
    .map((pt) => pt.trim())
    .filter(Boolean);
  if (points.length === 0) return null;
  return (
    <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-60">
      <ul className="text-sm text-[#4A4E69] space-y-1 mb-4 ml-2">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start">
            <span className="text-[#767BBC] mr-2">•</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
