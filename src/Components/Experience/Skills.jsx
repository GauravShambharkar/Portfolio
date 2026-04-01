import React, { useState } from "react";
import { Plus } from "lucide-react";

const SkillStack = ({ skills }) => {
  const [showAll, setShowAll] = useState(false);

  if (!skills || !Array.isArray(skills)) return null;

  // Track if we are on a small screen or not - ideally we could use an media query hook or just CSS classes to hide/show toggled versions.
  // However, to keep it simple and within the component, we'll slice based on state.
  // The button's visibility is already handled by 'max-[450px]:block' in the CSS classes.

  const DISPLAY_LIMIT = 5;
  const displayedSkills = showAll ? skills : skills.slice(0, DISPLAY_LIMIT);
  const hasMore = skills.length > DISPLAY_LIMIT;

  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      {displayedSkills.map((skill, index) => (
        <p
          key={index}
          className="text-sm border px-2 py-0.5 border-dashed cursor-pointer hover:bg-white/20 ease-in-out duration-300 rounded-full bg-white/10 border-white/10 text-[10px] block"
        >
          {skill}
        </p>
      ))}

      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-[10px] border px-2 py-0.5 border-dashed rounded-full bg-white/5 border-white/10 hover:bg-white/20 transition-all text-white/80 cursor-pointer "
        >
          {showAll ? (
            "Show Less"
          ) : (
            <>
              <Plus size={10} /> {skills.length - DISPLAY_LIMIT} more
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default SkillStack;
