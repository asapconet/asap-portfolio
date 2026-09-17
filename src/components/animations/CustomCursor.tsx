"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [pointer, setPointer] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 9);
      y.set(e.clientY - 9);

      setHidden(false);

      const target = e.target as HTMLElement;
      setPointer(!!target.closest("a, button, [data-cursor-pointer]"));
    };

    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      style={{
        x,
        y,
        opacity: hidden ? 0 : 1,
      }}
    >
      <motion.div
        animate={{
          scale: pointer ? 2 : 1,
          rotate: pointer ? 45 : 0,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
        className="relative w-[18px] h-[18px]"
      >
        <span className="absolute top-1/2 left-0 w-full h-px bg-pri -translate-y-1/2" />
        <span className="absolute left-1/2 top-0 h-full w-px bg-pri -translate-x-1/2" />
      </motion.div>
    </motion.div>
  );
}
