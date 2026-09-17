"use client";

import { useState } from "react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#_";

export default function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);

  function scramble() {
    let iteration = 1;
    const original = text;
    const interval = setInterval(() => {
      setDisplay(
        original
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return original[idx];
            return GLITCH_CHARS[
              Math.floor(Math.random() * GLITCH_CHARS.length)
            ];
          })
          .join(""),
      );
      iteration += original.length / 8;
      if (iteration >= original.length) {
        setDisplay(original);
        clearInterval(interval);
      }
    }, 60);
  }

  return (
    <span
      onMouseEnter={scramble}
      className={`inline-block cursor-default ${className}`}
    >
      {display}
    </span>
  );
}
