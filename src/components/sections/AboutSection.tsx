import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import AppButton from "@/components/Button";
import Image from "next/image";
import TypingText from "../animations/Typing";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4 max-w-[1024px] w-full lg:pt-[3rem] min-h-[504px]">
      <div className="absolute -left-6 mt-28 hidden xl:block w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-l-0" />

      <SectionHeader name="about-me" />

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 w-full">
        <article className="flex flex-col gap-6 lg:w-[515px] mt-4 text-sec">
          <TypingText typingSpeed={60} cursor={false} className="paragraph-1">
            Hello I&aposmm Aaron
          </TypingText>

          <div className="paragraph-1-s !leading-7 space-y-6">
            <TypingText typingSpeed={20} startDelay={300}>
              I&aposm a software engineer with a passion for building innovative
              and user-friendly applications. I have experience working with a
              variety of technologies, including React, Node.js, and Python.
              I&aposmm always looking for new challenges and opportunities to
              learn and grow.
            </TypingText>
            <br />
            <br />
            <TypingText typingSpeed={60} cursor={false}>
              I&aposm currently working on a project that involves building a
              web application using React and Node.js. I&aposm excited to see
              where this project will take me and what new skills I&aposll learn
              along the way.
            </TypingText>
          </div>

          <AppButton asLink="/about" rightIcon className="w-fit">
            Read more
          </AppButton>
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
            alt="Aaron's about image"
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
