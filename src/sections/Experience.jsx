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
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setActiveTab("Professional")}
          className={`text-sm px-3 py-1 rounded transition-colors cursor-pointer ${
            activeTab === "Professional"
              ? "bg-[#EFF1FF] text-black italic"
              : "text-[#4a4e69] bg-[#F5F7FF] hover:bg-[#EFF1FF] hover:text-black"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("Extracurricular")}
          className={`text-sm px-3 py-1 rounded transition-colors cursor-pointer ${
            activeTab === "Extracurricular"
              ? "bg-[#EFF1FF] text-black italic"
              : "text-[#4a4e69] bg-[#F5F7FF] hover:bg-[#EFF1FF] hover:text-black"
          }`}
        >
          Extracurricular
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {currentData.map((experience, i) => {
          const isMultiRole = experience.roles.length > 1;

          return (
            <div key={`${activeTab}-${i}`} className="w-full cursor-default">
              {isMultiRole ? (
                // Multiple roles under same organization
                <div className="flex flex-col">
                  <a
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#767BBC] underline underline-offset-4 hover:text-[#474C90] transition-colors mb-2 w-fit"
                  >
                    {experience.organization}
                  </a>
                  <div className="flex flex-col pl-2">
                    {experience.roles.map((role, i) => (
                      // Role title and dates
                      <div key={i} className="group">
                        <div className="flex justify-between items-center">
                          <p>{role.title}</p>
                          <p className="text-sm text-[#AAAEC7]">
                            {role.startDate}
                            {role.endDate ? ` — ${role.endDate}` : ""}
                          </p>
                        </div>
                        <DescriptionList description={role.description} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Single role for the organization
                <div className="group cursor-default">
                  <div className="flex justify-between items-center">
                    <p>
                      <a
                        href={experience.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#767BBC] underline underline-offset-4 hover:text-[#474C90] transition-colors"
                      >
                        {experience.organization}
                      </a>
                      &nbsp;{experience.roles[0].title}
                    </p>
                    <p className="text-sm text-[#AAAEC7]">
                      {experience.roles[0].startDate}
                      {experience.roles[0].endDate
                        ? ` — ${experience.roles[0].endDate}`
                        : ""}
                    </p>
                  </div>
                  <DescriptionList description={experience.roles[0].description} />
                </div>
              )}
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
    <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-60 mb-2">
      <ul className="text-sm text-[#4A4E69] pt-2 space-y-1">
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
