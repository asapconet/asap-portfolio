"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "aaron — software engineer / technical writer" },
  { prompt: "$", text: "status --current" },
  { prompt: ">", text: "building bitcoin with rust..." },
];

export default function BootIntro({ onComplete }: { onComplete: () => void }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 300);
      }, 220);
      return () => clearTimeout(t);
    }
    const line = LINES[lineIdx].text;
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 16);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 150);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(6px)", scale: 1.02 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 z-30 flex flex-col justify-center gap-1 bg-background font-mono text-sm sm:text-base text-sec px-1"
        >
          {LINES.slice(0, lineIdx + 1).map((line, i) => (
            <p key={i}>
              <span className="text-pri mr-2">{line.prompt}</span>
              {i === lineIdx ? line.text.slice(0, charIdx) : line.text}
              {i === lineIdx && <span className="ml-0.5 animate-pulse">_</span>}
            </p>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
