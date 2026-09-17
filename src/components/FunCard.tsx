"use client";

import React from "react";
import { motion } from "framer-motion";
import GlitchText from "./animations/GlitchText";

export interface FProps {
  facts: string[];
}

export const FunCard: React.FC<FProps> = ({ facts: funFacts }) => {
  return (
    <motion.div
      whileHover={{ y: -3, rotate: -0.5 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="w-max border border-sec h-fit"
    >
      <div className="flex flex-wrap gap-x-2 gap-y-1 border-y border-sec p-3 paragraph-1 text-sec">
        {funFacts.map((el, idx) => (
          <span
            key={idx}
            className="whitespace-normal break-words leading-snug"
          >
            <GlitchText text={el} />
          </span>
        ))}
      </div>
    </motion.div>
  );
};
