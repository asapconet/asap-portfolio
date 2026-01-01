import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { ProjectCard } from "../ProjectCard";
import { projectData } from "@/static/data/projectData";

export default function ProjectSection() {
  return (
    <section
      className="flex flex-col md:items-start gap-4
    max-w-[1024px] w-full pt-[4rem]"
    >
      <DotGrid
        cols={2}
        className="absolute -left-2 mt-12 hidden xl:grid"
        dotClassName="bg-white/90"
      />
      <SectionHeader name="project" link="projects" linkName="View all" />
      <div
        className="flex flex-col md:flex-wrap md:flex-row md:justify-between
        lg:justify-normal gap-4 mb-32"
      >
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
            absolute -right-6 mt-28
            hidden xl:block
            w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
          "
        />
      </div>
    </section>
  );
}
