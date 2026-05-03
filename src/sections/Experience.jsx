import { useState } from "react";

const professionalExperiences = [
  {
    organization: "York Region",
    href: "https://www.york.ca/",
    roles: [
      {
        title: "IT Service Desk Assistant",
        startDate: "May 2026",
        endDate: "Present",
        description: "",
      },
      {
        title: "Technical Support Assistant",
        startDate: "May 2025",
        endDate: "August 2025",
        description:
          "`Managed 1000+ assets and data associated`Installed new devices, transferred existing devices to the new policy, assisted 40+ clients with software setup, and handled issues clients had with their new equipment as part of the PC Refresh Project`Collaborated with the Local Systems Support team to resolve and mitigate hardware and software issues",
      },
    ],
  },
  {
    organization: "Kumon",
    href: "https://www.kumon.com",
    roles: [
      {
        title: "Centre Assistant",
        startDate: "July 2023",
        endDate: "Nov 2023",
        description:
          "`Graded work of 30+ students and assessed academic progress`Provided guided lessons and individualized support in math and reading to students aged 7-15`Collaborated with the Instructor and Centre Assistants to maintain an organized and professional learning environment",
      },
    ],
  },
];

const extracurricularExperiences = [
  {
    organization: "MacHacks 2026",
    href: "https://www.mcmasterai.ca/machacks",
    roles: [
      {
        title: "Hacker",
        startDate: "March 2026",
        description: "",
      },
    ],
  },
  {
    organization: "McMaster AI in Medicine (AIMed)",
    href: "https://msumcmaster.ca/initiative/artificial-intelligence-in-medicine-student-society-aimed/",
    roles: [
      {
        title: "VP Admin",
        startDate: "November 2025",
        endDate: "Present",
        description: "`Spearheaded the development of the club website`Collaborated with a team of 15+ students to organize workshops and speaker events on AI in Medicine`Recorded notes at bi-weekly meetings and managed internal documents",
      },
    ],
  },
  {
    organization: "McMaster Engineering Society (MES)",
    href: "https://www.macengsociety.ca/",
    roles: [
      {
        title: "Web Developer - Infrastructure Technology Team",
        startDate: "July 2025",
        endDate: "Present",
        description:
          "`Worked with a team of 5 to develop a new MES website with React and Tailwind CSS`Maintained the existing website in production`Participated in bi-weekly standup meetings, following agile methodology",
      },
      {
        title: "First Year Council Secretary",
        startDate: "October 2024",
        endDate: "April 2025",
        description:
          "`Collaborated with a team of 12+ students to plan and host monthly events for the first-year engineering community`Recorded notes at bi-weekly meetings and managed internal documents",
      },
    ],
  },
  {
    organization: "McMaster Varsity Fencing Team",
    href: "https://marauders.ca/index.aspx",
    roles: [
      {
        title: "Athlete",
        startDate: "September 2024",
        endDate: "Present",
        description: "",
      },
    ],
  },
  {
    organization: "Hack The North",
    href: "https://hackthenorth.com/",
    roles: [
      {
        title: "Event Assistant",
        startDate: "September 2023",
        description:
          "`Supported workshop hosts with setup, check-in, and attendee tracking`Provided schedule and direction guidance to hackers`Organized supplies in accessible locations within the building",
      },
    ],
  },
  {
    organization: "Centre for Immigrant and Community Services (CICS)",
    href: "https://t.cicscanada.com/",
    roles: [
      {
        title: "Youth Mentor",
        startDate: "April 2023",
        endDate: "June 2023",
        description:
          "`Led and supervised various math, literacy, and group-bonding activities for a group of 20 students`Provided one-on-one support to 5+ students throughout the duration of the program",
      },
    ],
  },
];

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
