import React from "react";

export interface FProps {
  facts: string[];
}

export const FunCard: React.FC<FProps> = ({ facts: funFacts }) => {
  return (
    <div
      className="
        w-max
        border border-sec
        h-fit
      "
    >
      <div
        className="
          flex flex-wrap
          gap-x-2 gap-y-1
          border-y border-sec
          p-3
          paragraph-1 text-sec
        "
      >
        {funFacts.map((el, idx) => (
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
