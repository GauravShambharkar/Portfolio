import { CodeXmlIcon, Dot } from "lucide-react";
import React from "react";
import SkillStack from "./Skills";

const EXPERIENCES = [
  {
    company: "KhwaaishAi",
    companyLink: "https://www.linkedin.com/company/khwaaish/",
    companyLogo: "/khwaaishLogo.png",
    status: false,
    more: [
      {
        position: "Frontend Developer",
        jobType: "Intern",
        workType: "Remote",
        start: "Jan - 2026",
        end: "March - 2026",
        description:
          "Implemented parallel API handling (3 concurrent API calls) to reduce load time and improve data fetching efficiency. Managed complex persistent state efficiently, ensuring consistent data flow across the application. Worked on multi-category product architecture, understanding of scalable frontend systems. Developed fully responsive, production-ready UI, ensuring seamless experience across devices and improving user retention.",
        skillStack: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "nuqs",
          "zustand",
          "API",
          "git",
        ],
      },
    ],
  },
];

const ExpandableText = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (text.length <= maxLength) {
    return <p className="text-xs text-white/70">{text}</p>;
  }

  return (
    <p className="text-xs text-white/70">
      {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-1 text-white cursor-pointer underline decoration-white/30 hover:decoration-white transition-all overflow-hidden"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </p>
  );
};

const Experience = () => {
  return (
    <>
      <div className="w-full xcenter ">
        <div className="w-190 max-[750px]:w-full text-white borderb p-4 flex flex-col gap-4 pb-7">
          <h1>Experience</h1>
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* company container */}
                <div className="flex items-center gap-2 ">
                  <div className="border border-white/20 rounded-full bg-black">
                    <img
                      src={item.companyLogo}
                      alt={item.company}
                      className="w-8 h-8 p-1 object-contain"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex">
                      <h2 className="text-xl">
                        <a
                          href={item.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {item.company}
                        </a>
                      </h2>
                      {item.status && (
                        <div className="relative flex">
                          <Dot
                            className={`size-8 rounded-full ${item.status && "text-green-500 animate-ping"} `}
                          />
                          <Dot
                            className={`size-8 rounded-full ${item.status && "text-green-500 absolute"} `}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex flex-col">
                  {item.more.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex gap-1 ">
                      {/* first block */}
                      <div className="ml-6 w-10 flex flex-col items-center justify-start ">
                        <div className="detail_icon_parent shrink-0">
                          <CodeXmlIcon className="size-4" />
                        </div>
                        {roleIndex ===
                        item.more.map((_) => {}).length - 1 ? null : (
                          <div className="h-full border border-white/20"></div>
                        )}
                      </div>
                      {/* block 2nd */}
                      <div className="flex flex-col gap-2 ">
                        <div className="flex gap-2  items-center">
                          <p className="text-sm border border-white/0 h-full">
                            {role.position}
                          </p>
                          <div className="flex  items-center gap-2">
                            <p className="text-[10px] text-white/60">
                              {role.jobType}
                            </p>
                            <div className="text-white/20 border h-2 rounded-full"></div>
                            <p className="text-[10px] text-white/60">
                              {role.workType}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <p className="text-xs text-white/60">
                            {role.start} - {role.end}
                          </p>
                        </div>

                        {role.description.length > 0 && (
                          <ExpandableText text={role.description} />
                        )}

                        <SkillStack skills={role.skillStack} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
