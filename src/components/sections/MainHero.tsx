"use client";

import { useEffect, useRef, useState } from "react";
import { createTimeline } from "animejs";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DotsIcon1 } from "@/assets/Icons/Dots";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import myCover from "@/assets/myCover.png";
import Image from "next/image";
import ApButton from "../Button";
import TypingText from "../animations/Typing";
import BootIntro from "../animations/BootIntro";
import Magnetic from "../animations/Magnetic";

export default function MainHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [booted, setBooted] = useState(false);

  // mouse-tilt (subtle, layered on top of the anime.js entrance)
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sx = useSpring(mvX, { stiffness: 120, damping: 16 });
  const sy = useSpring(mvY, { stiffness: 120, damping: 16 });
  const rotateX = useTransform(sy, [-40, 40], [6, -6]);
  const rotateY = useTransform(sx, [-40, 40], [-6, 6]);

  useEffect(() => {
    if (!booted || !containerRef.current) return;

    const tl = createTimeline({
      autoplay: true,
      defaults: { ease: "outExpo", duration: 1000 },
    });

    tl.add(".main-logo", {
      translateX: ["0rem", "4rem"],
      scale: [0.9, 1.06, 1],
      duration: 1100,
    })
      .add(
        ".my-photo",
        { translateX: ["0rem", "3rem"], opacity: [0, 1], duration: 900 },
        "-=750",
      )
      .add(
        ".dots",
        { scale: [0.6, 1], opacity: [0, 1], duration: 900 },
        "-=650",
      )
      // scanline flourish once everything's in place
      .add(
        ".hero-scan",
        {
          translateY: ["-120%", "220%"],
          opacity: [0, 0.6, 0],
          duration: 900,
          ease: "linear",
        },
        "-=200",
      )
      // badge glitch-in
      .add(
        ".hero-badge",
        {
          opacity: [0, 1],
          translateX: [-6, 3, -2, 0],
          duration: 500,
        },
        "-=400",
      );
  }, [booted]);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1024px] w-full pt-16 md:pt-20 min-h-[420px]">
      {!booted && <BootIntro onComplete={() => setBooted(true)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-6 max-w-[520px] sm:pt-10"
      >
        <p className="heading-1-sm">
          Aaron is a <span className="text-pri">Software Engineer</span> and a
          <span className="text-pri"> Technical Writer</span>
        </p>

        <p className="paragraph-1s text-sec">
          He builds production software and is expanding across the stack, from
          modern web applications to backend APIs, and Bitcoin with Rust
        </p>

        <Magnetic className="hidden sm:block w-fit">
          <ApButton asLink="contact">Contact Me!!</ApButton>
        </Magnetic>
      </motion.div>

      <motion.div
        ref={tiltRef}
        onMouseMove={(e) => {
          const rect = tiltRef.current?.getBoundingClientRect();
          if (!rect) return;
          mvX.set(e.clientX - rect.left - rect.width / 2);
          mvY.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          mvX.set(0);
          mvY.set(0);
        }}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="relative w-full max-w-[469px] aspect-[469/388]"
      >
        <div ref={containerRef} className="relative w-full h-full">
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

          {/* scanline flourish, plays once at the end of the entrance */}
          <span className="hero-scan pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-pri/20 to-transparent opacity-0" />
        </div>
      </motion.div>

      {/* Badge */}
      <div className="hero-badge absolute right-0 -bottom-14 w-full sm:w-[412px] h-auto px-2 sm:px-4 py-3 border border-white backdrop-blur opacity-0">
        <p className="paragraph-4 sm:paragraph-1 flex items-center gap-1 sm:gap-2">
          <span className="min-w-[16px] h-[16px] bg-pri"></span>
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
              Bitcoin with Rust
            </TypingText>
          </span>
        </p>
      </div>
    </section>
  );
}
