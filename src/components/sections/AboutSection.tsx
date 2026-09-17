"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import AppButton from "@/components/Button";
import Image from "next/image";
import TypingText from "../animations/Typing";
import Magnetic from "../animations/Magnetic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const sx = useSpring(mvX, { stiffness: 120, damping: 18 });
  const sy = useSpring(mvY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(sy, [-40, 40], [4, -4]);
  const rotateY = useTransform(sx, [-40, 40], [-4, 4]);

  return (
    <section className="flex flex-col gap-4 max-w-[1024px] w-full lg:pt-[3rem] min-h-[504px]">
      <div className="absolute -left-6 mt-28 hidden xl:block w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-l-0" />

      <SectionHeader name="about-me" />

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full">
        <article className="flex flex-col gap-3 sm:gap-6 lg:w-[515px] mt-4 text-sec">
          <TypingText typingSpeed={60} cursor={false} className="paragraph-1">
            I&apos;m Aaron
          </TypingText>

          <div className="paragraph-1-s !leading-7 space-y-6">
            <TypingText typingSpeed={20} startDelay={300}>
              A frontend-focused software engineer based in Abuja, Nigeria, with
              5+ years of experience shipping production web applications in
              TypeScript, React, and Next.js. I care about clean component
              architecture, reliable state management, and interfaces that are
              actually pleasant to use.
            </TypingText>
            <br />
            <br />
            <TypingText typingSpeed={60} cursor={false}>
              Over the years I&apos;ve led frontend work on platforms like
              Pillar (hospital staff management) and built Shopify-embedded
              apps, survey tools, and business dashboards for teams across the
              UK, Netherlands, Canada, and Nigeria. I&apos;ve also picked up
              PHP/WordPress along the way and I&apos;m expanding into backend
              development with Rust and Axum.
            </TypingText>
          </div>

          <Magnetic className="w-fit">
            <AppButton asLink="/about" rightIcon>
              Read more
            </AppButton>
          </Magnetic>
        </article>

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
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="w-full sm:w-[339px] h-auto sm:h-[507px] relative mx-auto lg:mx-0"
        >
          <DotGrid
            cols={5}
            width={80}
            height={80}
            gap={-1}
            className="absolute left-0 top-2 sm:w-[120px] sm:h-[120px]"
            dotClassName="bg-white/90"
          />

          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/aboutImage.png"
              alt="Aaron's about image"
              width={339}
              height={507}
              className="w-full h-auto"
            />
          </motion.div>

          <DotGrid
            cols={5}
            rows={3}
            width={80}
            height={80}
            gap={-1}
            className="absolute right-0 bottom-24 sm:w-[120px] sm:h-[120px]"
            dotClassName="bg-white/90"
          />
          <div className="border w-[90%] mx-auto sm:mx-4 border-pri" />
        </motion.div>
      </div>

      <DotGrid
        cols={4}
        width={120}
        height={150}
        gap={-1}
        className="absolute right-0 mt-72 hidden xl:grid"
        dotClassName="bg-white/90"
      />
    </section>
  );
}
