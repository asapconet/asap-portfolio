import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactMeSection from "@/components/sections/ContactMeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import QuoteArea from "@/components/sections/QuoteArea";
import MainHero from "@/components/sections/MainHero";
// import anime from "animejs";
// import { useEffect } from "react";

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
    <div
      className="flex flex-col items-center justify-center min-h-[90vh]
    gap-5 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <MainHero />
      {/*Quotes*/}
      <QuoteArea />

      {/*Projects */}
      <ProjectSection />

      {/*Skills  */}
      <SkillsSection />

      {/* About */}
      <AboutSection />

      {/*Contact*/}
      <ContactMeSection />
    </div>
  );
}
