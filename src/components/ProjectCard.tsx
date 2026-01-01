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
    <div className="border border-sec border-1 w-[311px] sm:w-[331px] h-fit mx-auto sm:mx-0">
      {rest.imagePrev && (
        <div className="w-full aspect-[331/201] relative overflow-hidden">
          <Image
            src={rest.imagePrev}
            alt={`${rest.projectName} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 331px"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 border-y border-sec border-1 p-2 paragraph-1 text-sec min-h-[44px]">
        {Array.isArray(lang) &&
          lang.map((el, idx) => (
            <span
              key={idx}
              className="whitespace-normal overflow-hidden break-words"
            >
              {el}
            </span>
          ))}
      </div>

      <div className="p-4 sm:p-6">
        <h2 className="heading-1 text-lg sm:text-xl md:text-2xl">
          {rest.projectName}
        </h2>
        <p className="paragraph-1 text-sec py-3 sm:py-4 text-sm sm:text-base">
          {rest.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
          <ApButton
            asLink={rest.projectLink}
            className="min-w-[101px] w-full sm:w-auto flex items-center justify-center
            gap-2 h-[37px] sm:h-[40px] px-3 sm:px-4 py-2 text-sm sm:text-base"
          >
            <span>{rest.linkName}</span>
            <span>~&gt;</span>
          </ApButton>

          {rest.projectLink1 !== undefined && (
            <ApButton
              asLink={rest.projectLink1}
              className="min-w-[101px] w-full sm:w-auto h-[37px] sm:h-[40px] px-4 py-2 text-sm sm:text-base"
            >
              {rest.linkName1}
            </ApButton>
          )}
        </div>
      </div>
    </div>
  );
};
