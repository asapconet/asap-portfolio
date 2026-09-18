"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ApLink from "./LInk";
import GlitchText from "./animations/GlitchText";
import { navLinks } from "@/static/data/navLinks";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[70] w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="block w-6 h-[2px] bg-pri origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-6 h-[2px] bg-pri"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="block w-6 h-[2px] bg-pri origin-center"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#0b0e14] flex flex-col"
          >
            {/* scanline sweep on open */}
            <motion.span
              initial={{ y: "-10%", opacity: 0.5 }}
              animate={{ y: "110%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-pri/20 to-transparent"
            />

            <div className="flex items-center justify-between px-6 h-20 border-b border-sec/40">
              <span className="font-mono text-sec text-sm">
                <GlitchText text="~/menu" />
              </span>
              <span className="font-mono text-pri text-sm animate-pulse">
                ●
              </span>
            </div>

            <ul className="flex-1 flex flex-col justify-center gap-2 px-6 font-mono">
              {navLinks.map((el, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{
                    delay: 0.15 + idx * 0.07,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b border-sec/20 py-4"
                >
                  <ApLink
                    to={el.url}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-2 text-2xl text-pri"
                  >
                    <span className="text-sec text-base">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sec">#</span>
                    <GlitchText text={el.title} />
                  </ApLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="px-6 py-6 border-t border-sec/40 font-mono text-xs text-sec"
            >
              <span className="text-pri">$</span> status --online
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
