"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";

interface TypingTextProps {
  children: string;
  className?: string;
  typingSpeed?: number;
  cursor?: boolean;
  cursorChar?: string;
  startDelay?: number;
}

export default function TypingText({
  children,
  className = "",
  typingSpeed = 50,
  cursor = true,
  cursorChar = "|",
  startDelay = 0,
}: TypingTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const letterAnimRef = useRef<any>(null);
  const cursorAnimRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !textRef.current) return;

    const element = textRef.current;
    const text = children;

    element.innerHTML = "";

    const letters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.className = "inline-block opacity-0";
      span.textContent = char === " " ? "\u00A0" : char;
      return span;
    });

    letters.forEach((letter) => element.appendChild(letter));

    let cursorSpan: HTMLSpanElement | null = null;
    if (cursor) {
      cursorSpan = document.createElement("span");
      cursorSpan.className = "cursor inline-block";
      cursorSpan.textContent = cursorChar;
      element.appendChild(cursorSpan);
    }

    // Animate letters – store the instance for cleanup
    letterAnimRef.current = animate(
      element.querySelectorAll("span:not(.cursor)"),
      {
        opacity: [0, 1],
        duration: 50,
        delay: stagger(typingSpeed),
        ease: "outQuad",
        offset: startDelay,
      },
    );

    // Animate cursor
    if (cursor && cursorSpan) {
      cursorAnimRef.current = animate(cursorSpan, {
        opacity: [1, 0, 1],
        duration: 800,
        loop: true,
        ease: "inOutSine",
      });
    }

    // Proper cleanup on unmount or re-run
    return () => {
      letterAnimRef.current?.cancel();
      cursorAnimRef.current?.cancel();
    };
  }, [children, isMounted, typingSpeed, cursor, cursorChar, startDelay]);

  return <span ref={textRef} className={className} />;
}
