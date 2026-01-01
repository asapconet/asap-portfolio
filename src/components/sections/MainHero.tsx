"use client";

import { useEffect, useRef } from "react";
import { createTimeline, animate, stagger } from "animejs";
import { DotsIcon1 } from "@/assets/Icons/Dots";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import myCover from "@/assets/myCover.png";
import Image from "next/image";
import ApButton from "../Button";
import TypingText from "../animations/Typing";

export default function MainHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // v4: Use createTimeline with defaults for shared params
    const tl = createTimeline({
      autoplay: true,
      defaults: {
        ease: "outExpo", // v4 uses 'ease' instead of 'easing', and short names like 'outExpo'
        duration: 1600, // base duration, overridden where needed
      },
    });

    tl.add(".main-logo", {
      translateX: ["0rem", "4rem"],
      scale: [0.95, 1.05, 1],
      duration: 1800,
    })
      .add(
        ".my-photo",
        {
          translateX: ["0rem", "3rem"],
          opacity: [0, 1],
          duration: 1400,
        },
        "-=1200", // overlap
      )
      .add(
        ".dots",
        {
          scale: [0.6, 1],
          opacity: [0, 1],
          duration: 1600,
        },
        "-=1000",
      );
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1024px] w-full pt-16 md:pt-20">
      {/* ... text content ... */}
      <div className="flex flex-col gap-6 max-w-[520px] sm:pt-10">
        <p className="heading-1-sm">
          Aaron is a <span className="text-pri">Software engineer</span> and a
          <span className="text-pri"> Technical writer</span>
        </p>
        <p className="paragraph-1s text-sec">
          He crafts robust web applications where technologies meet creativity
        </p>
        <ApButton className="hidden sm:block" asLink="contact">
          Contact Me !!
        </ApButton>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-[469px] aspect-[469/388]"
      >
        <div className="main-logo pt-[4.8rem]">
          <MixedShapeLogo1 />
        </div>

        <Image
          className="my-photo absolute top-0 right-0 object-contain opacity-0"
          alt="Aaron's cover"
          src={myCover}
          fill
          priority
        />

        <div className="dots absolute right-4 bottom-12 opacity-0">
          <DotsIcon1 />
        </div>
      </div>

      {/* Badge */}
      <div className="absolute right-4 md:right-10 -bottom-14 w-[90%] sm:w-[402px] h-auto px-4 py-3 border border-white backdrop-blur">
        <p className="paragraph-1 flex items-center gap-1 sm:gap-2">
          <span className="w-[16px] h-[16px] bg-pri"></span>
          <span className="flex items-center gap-1 sm:gap-2">
            <TypingText typingSpeed={60} cursor={false} startDelay={800}>
              Currently building
            </TypingText>
            <TypingText
              typingSpeed={60}
              cursor={true}
              cursorChar="|"
              startDelay={800}
              className="text-sec"
            >
              Rust APIs
            </TypingText>
          </span>
        </p>
      </div>
    </section>
  );
}
