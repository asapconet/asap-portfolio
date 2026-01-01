import Image from "next/image";
import React from "react";
import ApButton from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface PProps {
  imagePrev?: string | StaticImport;
  lang: string[];
  projectName: string;
  desc?: string;
  projectLink: string;
  linkName: string;
  projectLink1?: string;
  linkName1?: string;
}

export const ProjectCard: React.FC<PProps> = ({ lang, ...rest }) => {
  return (
    <div className="border border-sec border-1 w-[331px] h-fit">
      {rest.imagePrev && (
        <Image
          src={rest.imagePrev}
          alt={`${rest.projectName} cover`}
          width={331}
          height={201}
        />
      )}
      <div className=" flex gap-2 border-y border-sec border-1 p-2 paragraph-1 text-sec">
        {Array.isArray(lang) &&
          lang.map((el, idx) => {
            return (
              <span
                key={idx}
                className="whitespace-normal overflow-hidden break-words"
              >
                {el}
              </span>
            );
          })}
      </div>
      <div className="p-4">
        <h2 className="heading-1">{rest.projectName}</h2>
        <p className="paragraph-1 text-sec py-4">{rest.desc}</p>
        <div className="flex gap-6">
          <ApButton
            asLink={rest.projectLink}
            className="min-w-[101px] w-full flex items-center gap-2 h-[37px] px-2 py-2"
          >
            <span>{rest.linkName}</span> <span> ~&gt;</span>
          </ApButton>
          {rest.projectLink1 !== undefined && (
            <ApButton
              asLink={rest.projectLink1}
              className="min-w-[101px] h-[37px] px-4 py-2"
            >
              {rest.linkName1}
            </ApButton>
          )}
        </div>
      </div>
    </div>
  );
};
