import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { ProjectCard } from "../ProjectCard";
import { projectData } from "@/static/data/projectData";
import { RevealItem, StaggerGrid } from "../animations/RevealOnScroll";

export default function ProjectSection() {
  return (
    <section
      className="flex flex-col md:items-start gap-4
    max-w-screen-lg w-full pt-[4rem]"
    >
      <DotGrid
        cols={2}
        className="absolute -left-2 mt-12 hidden xl:grid"
        dotClassName="bg-white/90"
      />
      <SectionHeader name="projects" link="projects" linkName="View all" />

      <StaggerGrid className="columns-1 md:columns-2 lg:columns-3 gap-6 w-full">
        {projectData
          .slice(0, 4)
          .filter((el) => el.status === "completed")
          .map((el, idx) => (
            <RevealItem key={idx} className="break-inside-avoid mb-6 w-full">
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
            </RevealItem>
          ))}
      </StaggerGrid>
      <div
        className="
          absolute -right-6 mt-28
          hidden xl:block
          w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
        "
      />
    </section>
  );
}
