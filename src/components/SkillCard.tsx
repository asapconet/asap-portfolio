"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SProps {
  skillSets: string[];
  skillType: string;
}

export const SkillCard: React.FC<SProps> = ({ skillSets, skillType }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "var(--pri, #fff)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative w-full sm:max-w-[220px] border border-sec h-fit overflow-hidden"
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/10 to-transparent
      -translate-y-full group-hover:translate-y-[900%] transition-transform duration-[900ms] ease-linear"
      />

      <div className="p-4 flex items-center gap-1">
        <span className="text-pri opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          &gt;
        </span>
        <h2 className="heading-3">{skillType}</h2>
        <span className="w-[2px] h-4 bg-pri opacity-0 group-hover:opacity-100 group-hover:animate-pulse ml-0.5" />
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 border-y border-sec p-3 paragraph-1 text-sec">
        {skillSets.map((el, idx) => (
          <span
            key={idx}
            className="whitespace-normal break-words leading-snug group-hover:text-white transition-colors duration-300"
            style={{ transitionDelay: `${idx * 25}ms` }}
          >
            {el}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
