"use client";

import { useEffect, useRef, useState } from "react";
import { createTimeline } from "animejs";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DotsIcon1 } from "@/assets/Icons/Dots";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import myCover from "@/assets/coverImage.png";
import Image from "next/image";
import ApButton from "../Button";
import TypingText from "../animations/Typing";
import BootIntro from "../animations/BootIntro";
import Magnetic from "../animations/Magnetic";

export default function MainHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [booted, setBooted] = useState(false);

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
      defaults: {
        ease: "outExpo",
        duration: 1000,
      },
    });

    tl.add(".main-logo", {
      translateX: ["0rem", "4rem"],
      scale: [0.9, 1.06, 1],
      duration: 1100,
    })
      .add(
        ".my-photo",
        {
          translateX: ["0rem", "3rem"],
          opacity: [0, 1],
          duration: 900,
        },
        "-=750",
      )
      .add(
        ".dots",
        {
          scale: [0.6, 1],
          opacity: [0, 1],
          duration: 900,
        },
        "-=650",
      )
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
    <section className="relative flex w-full max-w-screen-lg min-w-0 flex-col items-center justify-between gap-8 overflow-visible pt-8 md:flex-row md:pt-10 ">
      {!booted && <BootIntro onComplete={() => setBooted(true)} />}

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="flex w-full min-w-0 max-w-[520px] flex-col gap-6 sm:pt-10"
      >
        <h1 className="heading-1-sm">
          Aaron is a <span className="text-pri">Software Engineer</span> and a{" "}
          <span className="text-pri">Technical Writer</span>
        </h1>

        <p className="paragraph-1s text-sec">
          He builds production software and is expanding across the stack, from
          modern web applications to backend APIs, and Bitcoin with Rust
        </p>

        <Magnetic className="hidden w-fit sm:block">
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
        style={{
          rotateX,
          rotateY,
          transformPerspective: 800,
        }}
        className="
          relative
          w-full
          min-w-0
          max-w-[469px]
          shrink
          aspect-[469/388]
          overflow-visible
        "
      >
        <div
          ref={containerRef}
          className="relative h-full w-full min-w-0 overflow-hidden"
        >
          <div className="main-logo absolute inset-0 flex items-start justify-start pt-[4.8rem]">
            <MixedShapeLogo1 />
          </div>

          <Image
            className="my-photo absolute inset-0 h-full w-full object-contain -pr-3 opacity-0"
            alt="Aaron's cover"
            src={myCover}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 469px"
          />

          <div className="dots absolute bottom-12 right-4 opacity-0">
            <DotsIcon1 />
          </div>

          <span className="hero-scan pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-pri/20 to-transparent opacity-0" />
        </div>
      </motion.div>

      {/* Badge */}
      <div
        className="
          hero-badge
          absolute
          bottom-[-3.5rem]
          right-0
          w-full
          max-w-[412px]
          min-w-0
          px-2
          py-3
          border
          border-white
          backdrop-blur
          opacity-0
          sm:px-4
        "
      >
        <p className="paragraph-4 flex min-w-0 flex-wrap items-center gap-1 sm:paragraph-1 sm:gap-2">
          <span className="h-[16px] min-w-[16px] shrink-0 bg-pri" />

          <span className="flex min-w-0 flex-wrap items-center gap-1 sm:gap-2">
            <TypingText typingSpeed={60} cursor={false} startDelay={800}>
              Currently building
            </TypingText>

            <TypingText
              typingSpeed={60}
              cursor
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
