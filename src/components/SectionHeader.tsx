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
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center w-[80%] heading-2 sm:heading-1-sm">
          <span className="text-pri">#</span>
          <h2 className="">{name}</h2>
          <div className="w-[35%] h-[1px] mx-4 bg-pri"></div>
        </div>
        {rest.link && (
          <ApLink className="" to={rest.link}>
            {rest.linkName}
            <span> ~~&gt;</span>
          </ApLink>
        )}
      </div>
    </div>
  );
};
