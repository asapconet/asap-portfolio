import React from "react";
import ApLink from "./LInk";

interface IProps {
  name: string;
  linkName?: string;
  link?: string;
}

export const SectionHeader = ({ name, ...rest }: IProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center min-w-0 gap-2 heading-2 sm:heading-1-sm w-full">
          <span className="text-pri shrink-0">#</span>

          <h2 className="whitespace-nowrap shrink-0">{name}</h2>

          <div className="flex-1 h-px bg-pri min-w-[12px]" />
        </div>

        {rest.link && (
          <ApLink className="whitespace-nowrap shrink-0" to={rest.link}>
            {rest.linkName}
            <span> ~~&gt;</span>
          </ApLink>
        )}
      </div>
    </div>
  );
};
