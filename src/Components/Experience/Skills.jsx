import React from "react";

const SkillStack = ({ skills }) => {
  if (!skills || !Array.isArray(skills)) return null;

  return (
    <>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {skills.map((skill, index) => (
          <p
            key={index}
            className="text-sm border px-2 py-0.5 border-dashed cursor-pointer hover:bg-white/20 ease-in-out duration-300 rounded-full bg-white/10 border-white/10 text-[10px]"
          >
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default SkillStack;
