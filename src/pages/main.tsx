import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactMeSection from "@/components/sections/ContactMeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import QuoteArea from "@/components/sections/QuoteArea";
import MainHero from "@/components/sections/MainHero";
export default function MainPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[90vh]
    gap-5 mx-auto sm:px-4 lg:px-6"
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
