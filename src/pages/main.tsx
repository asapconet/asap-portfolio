import { useEffect } from "react";
import anime from "animejs";
import { DotsIcon1 } from "@/assets/Icons/Dots";
import ApButton from "@/components/Button";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import { QuotationIcon } from "@/assets/Icons/Quotes";
import Image from "next/image";
import myCover from "@/assets/myCover.png";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "@/app/data/projectData";

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
      <div
        className="flex flex-col md:flex-row items-center gap-4 justify-between 
      max-w-[1024px] w-full pt-[4rem] h-[423px] relative"
      >
        <div className=" flex flex-col justify-between gap-10 h-[227px] ">
          <p className="heading-1">
            Elias is a <span className="text-pri"> web designer</span> and{" "}
            <span className="text-pri"> front-end developer</span>
          </p>
          <p className="paragraph-1s text-sec">
            He crafts responsive websites where technologies meet creativity
          </p>
          <ApButton asLink="contacts"> Contact Me !!</ApButton>
        </div>
        <div className="max-w-[469px] h-[388px] w-full relative">
          <MixedShapeLogo1 className="pt-[4.8rem]" />
          <Image
            className="absolute top-0 right-0"
            alt="myCover"
            src={myCover}
            width={460}
            height={380}
          />
          <div className="absolute right-4 bottom-12">
            <DotsIcon1 />
          </div>
        </div>
        <div className="absolute flex items-center w-[402px] right-10 -bottom-[3.25rem] h-[37px] pl-4 py-4 border-[1px] border-white">
          <p className="paragraph-1 flex items-center gap-2 ">
            <span className="w-[16px] h-[16px] bg-pri"></span>
            <span> Currently working on </span>
            <span className="text-sec"> Portfolio</span>
          </p>
        </div>
      </div>
      <div className="flex items-center">
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
          className="absolute flex items-center w-[91px] mt-24 right-0
          h-[91px] border-r-[0px] border-[1px] border-white"
        ></div>
      </div>

      <section
        className="flex flex-col items-start gap-4 
      max-w-[1024px] w-full pt-[4rem]"
      >
        <SectionHeader name="project" link="projects" linkName="View all" />
        <div className="flex flex-col md:flex-row gap-4 mb-32">
          {projectData.map((el) => (
            <ProjectCard
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
        </div>
        <SectionHeader name="skills" />
      </section>
    </main>
  );
}
