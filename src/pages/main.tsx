import { DotsIcon1 } from "@/assets/Icons/Dots";
import ApButton from "@/components/Button";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import { QuotationIcon } from "@/assets/Icons/Quotes";
import Image from "next/image";
import myCover from "@/assets/myCover.png";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "@/static/data/projectData";
import { DotGrid } from "@/components/DotGrids";
import SkillsSection from "@/components/SkillsSection";

export default function MainPage() {
  // useEffect(() => {
  //   const sumAnimate = anime({
  //     targets: "div",
  //     translateX: 250,
  //     rotate: "1turn",
  //     backgroundColor: "#FFF",
  //     duration: 800,
  //   });
  //   return () => {
  //     sumAnimate.pause();
  //   };
  // }, []);

  return (
    <main
      className="flex flex-col items-center justify-center min-h-[90vh]
    gap-5 "
    >
      <section
        className="
          relative flex flex-col md:flex-row
          items-center justify-between
          gap-8
          max-w-[1024px] w-full
          pt-16 md:pt-20
        "
      >
        <div className="flex flex-col gap-6 max-w-[520px] pt-10">
          <p className="heading-1-sm">
            Aaron is a <span className="text-pri"> software engineer</span> and{" "}
            <span className="text-pri"> full-stack web developer</span>
          </p>
          <p className="paragraph-1s text-sec">
            He crafts responsive websites where technologies meet creativity
          </p>
          <ApButton asLink="contacts"> Contact Me !!</ApButton>
        </div>
        <div className="relative w-full max-w-[469px] aspect-[469/388]">
          <MixedShapeLogo1 className="pt-[4.8rem]" />
          <Image
            className="absolute top-0 right-0 object-contain"
            alt="mySelf in main pose"
            src={myCover}
            fill
            priority
          />
          <div className="absolute right-4 bottom-12 hidden sm:block">
            <DotsIcon1 />
          </div>
        </div>
        <div
          className="
            absolute
            right-4 md:right-10
            -bottom-14
            w-[90%] sm:w-[402px]
            h-auto
            px-4 py-3
            border border-white
            backdrop-blur
          "
        >
          <p className="paragraph-1 flex items-center gap-2 ">
            <span className="w-[16px] h-[16px] bg-pri"></span>
            <span> Currently working on </span>
            <span className="text-sec"> Portfolio</span>
          </p>
        </div>
      </section>
      <div className="hidden lg:flex items-center">
        <div className=" flex flex-col mt-36 items-end relative">
          <div
            className="flex text-center items-center w-[712px] h-[95px]
        pl-4 py-4 border-[1px] border-white relative"
          >
            <QuotationIcon className="absolute -top-4 left-4" />
            <p className="heading-2 flex items-center gap-2 ">
              With great power comes great electricity bill
            </p>
            <QuotationIcon className="absolute -bottom-4 right-4" />
          </div>
          <div
            className="flex right-0 text-center items-center w-[162px] h-[63px]
            pl-4 py-4 border-t-[0px] border-[1px]  border-white relative"
          >
            <p className="heading-2 flex items-center gap-2 ">-Dr. Me</p>
          </div>
        </div>
        <div
          className="
            absolute right-0 mt-24
            w-12 sm:w-16 md:w-[91px]
            h-12 sm:h-16 md:h-[91px]
            border border-white border-r-0
          "
        />
      </div>
      <section
        className="flex flex-col items-start gap-4
      max-w-[1024px] w-full pt-[4rem]"
      >
        <DotGrid
          cols={2}
          className="absolute left-0 mt-12"
          dotClassName="bg-white/90"
        />
        <SectionHeader name="project" link="projects" linkName="View all" />
        <div className="flex flex-col md:flex-row gap-4 mb-32">
          {projectData.map((el, idx) => (
            <ProjectCard
              key={idx}
              imagePrev={el.imagePrev}
              lang={el.lang}
              projectName={el.projectName}
              desc={el.desc}
              projectLink={el.projectLink}
              linkName={el.linkName}
              projectLink1={el.projectLink1}
              linkName1={el.linkName1}
            />
          ))}
          <div
            className="
              absolute right-0 mt-28
              hidden md:block
              w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
            "
          />
        </div>
      </section>
      <SkillsSection />
      {/* About section*/}
      <section
        className="flex flex-col items-start gap-4
      max-w-[1024px] w-full pt-[4rem]"
      >
        <SectionHeader name="about-me" />
        <div
          className="
            absolute left-0 mt-28
            hidden md:block
            w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-l-0
          "
        />
      </section>
      <section
        className="flex flex-col items-start gap-4
      max-w-[1024px] w-full pt-[4rem]"
      >
        <SectionHeader name="contact" />
      </section>
    </main>
  );
}
