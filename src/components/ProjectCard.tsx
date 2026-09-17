"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ApButton from "./Button";
import GlitchText from "./animations/GlitchText";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Magnetic from "./animations/Magnetic";

export interface PProps {
  imagePrev?: string | StaticImport;
  lang: string[];
  projectName: string;
  desc?: string;
  projectLink: string | undefined;
  linkName?: string;
  projectLink1?: string | undefined;
  linkName1?: string | undefined;
  status?: "ongoing" | "completed";
}

export const ProjectCard: React.FC<PProps> = ({ lang, ...rest }) => {
  return (
    <motion.div
      whileHover={{ y: -6, rotate: -0.4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative border border-sec border-1 w-full sm:w-[331px]  lg:w-fit h-fit mx-auto sm:mx-0 overflow-hidden"
    >
      {/* corner brackets — hidden, snap in on hover */}
      {[
        "-top-px -left-px border-t border-l",
        "-top-px -right-px border-t border-r",
        "-bottom-px -left-px border-b border-l",
        "-bottom-px -right-px border-b border-r",
      ].map((pos, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute ${pos} w-3 h-3 border-pri opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200`}
          style={{ transitionDelay: `${i * 40}ms` }}
        />
      ))}

      {/* scanline sweep */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent -translate-y-full group-hover:translate-y-[1200%] transition-transform duration-[1100ms] ease-linear" />

      {rest.imagePrev && (
        <div className="w-full aspect-[331/201] relative overflow-hidden">
          <Image
            src={rest.imagePrev}
            alt={`${rest.projectName} cover`}
            fill
            className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 331px"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 border-y border-sec border-1 p-2 paragraph-1 text-sec min-h-[44px]">
        {Array.isArray(lang) &&
          lang.map((el, idx) => (
            <span
              key={idx}
              className="whitespace-normal overflow-hidden break-words group-hover:text-pri transition-colors duration-300"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {el}
            </span>
          ))}
      </div>

      <div className="p-4 sm:p-6">
        <h2 className="heading-2 text-lg sm:text-xl md:text-2xl">
          <GlitchText text={rest.projectName} />
        </h2>
        <p className="paragraph-1 text-sec py-3 sm:py-4 text-sm sm:text-base">
          {rest.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
          {rest.linkName && (
            <Magnetic>
              <ApButton
                asLink={rest.projectLink}
                className="min-w-[101px] w-full sm:w-auto flex items-center justify-center
              gap-2 h-[37px] sm:h-[40px] px-3 sm:px-4 py-2 text-sm sm:text-base"
              >
                <span>{rest.linkName}</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  ~&gt;
                </span>
              </ApButton>
            </Magnetic>
          )}

          {rest.projectLink1 && (
            <Magnetic>
              <ApButton
                asLink={rest.projectLink1}
                className="min-w-[101px] w-full sm:w-auto h-[37px] sm:h-[40px] px-4 py-2 text-sm sm:text-base"
              >
                {rest.linkName1}
              </ApButton>
            </Magnetic>
          )}
        </div>
      </div>
    </motion.div>
  );
};
