import { DotGrid } from "@/components/DotGrids";
import FunFacts from "@/components/sections/FunFacts";
import SkillsSection from "@/components/sections/SkillsSection";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[90vh]
gap-5 mx-auto sm:px-4 lg:px-8 max-w-screen-lg w-full mt-24"
    >
      <div className="h-[150px] sm:h-[200px] w-full">
        <DotGrid
          cols={3}
          rows={4}
          width={85}
          height={85}
          gap={-5}
          className="absolute left-0 mt-96 hidden xl:grid"
          dotClassName="bg-white/90"
        />
        <div className="">
          <div className="flex items-center heading-2 sm:heading-1-sm">
            <span className="text-pri">/</span>
            <h2 className="">about-me</h2>
          </div>
          <div className=" text-sec text-paragraph-1">Who am I?</div>
        </div>
        <div
          className="
          absolute -right-6
          hidden xl:block mt-24
          w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
        "
        />
      </div>
      <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full">
        <article className="flex flex-col gap-4 lg:w-[515px] mt-4 text-sec">
          <p className="paragraph-1">Hello I&apos;m Aaron</p>
          <p className="paragraph-1-s !leading-7 ">
            I&apos;m a frontend-focused software engineer based in Abuja,
            Nigeria, with 5+ years of experience shipping production web
            applications in TypeScript, React, and Next.js. I care about clean
            component architecture, reliable state management, and interfaces
            that are actually pleasant to use. <br /> <br />
            Over the years I&apos;ve led frontend work on platforms like Pillar
            (hospital staff management) and built Shopify-embedded apps, survey
            tools, and business dashboards for teams across the UK, Netherlands,
            Canada, and Nigeria. I&apos;ve also picked up PHP/WordPress along
            the way and I&apos;m expanding into backend development with Rust
            and Axum.
            <br />
            <br />
            Right now I&apos;m building Check-et, a goal-tracking app with a
            React Native/Expo client and a Rust/Axum backend — it&apos;s where
            most of my backend learning is happening these days.
          </p>
        </article>

        <div className="w-full sm:w-[339px] h-auto sm:h-[507px] relative mx-auto lg:mx-0">
          <DotGrid
            cols={5}
            width={80}
            height={80}
            gap={-1}
            className="absolute left-0 top-2 sm:w-[120px] sm:h-[120px]"
            dotClassName="bg-white/90"
          />

          <Image
            src="/images/aboutImage.png"
            alt=""
            width={339}
            height={507}
            className="w-full h-auto"
          />

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
        </div>
      </section>
      <SkillsSection withAiestetics={false} />
      <FunFacts />
    </section>
  );
};

export default About;
