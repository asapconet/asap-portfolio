import React from "react";

export interface SProps {
  skillSets: string[];
  skillType: string;
}

export const SkillCard: React.FC<SProps> = ({ skillSets, skillType }) => {
  return (
    <div
      className="
        w-full
        sm:max-w-[220px]
        border border-sec
        h-fit
      "
    >
      <div className="p-4">
        <h2 className="heading-3">{skillType}</h2>
      </div>

      <div
        className="
          flex flex-wrap
          gap-x-2 gap-y-1
          border-y border-sec
          p-3
          paragraph-1 text-sec
        "
      >
        {skillSets.map((el, idx) => (
          <span
            key={idx}
            className="
              whitespace-normal
              break-words
              leading-snug
            "
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};
