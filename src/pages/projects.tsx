import { DotGrid } from "@/components/DotGrids";
import { SectionHeader } from "@/components/SectionHeader";
import { projectData } from "@/static/data/projectData";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
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
            <h2 className="">projects</h2>
          </div>
          <div className=" text-sec text-paragraph-1">List of my projects</div>
        </div>
        <div
          className="
            absolute -right-6
            hidden xl:block mt-24
            w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
          "
        />
      </div>
      <section
        className="flex flex-col md:items-start gap-8
      w-full sm:pt-[2rem]"
      >
        <SectionHeader name="complete projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32 mt-4">
          {projectData.slice(0, 5).map((el, idx) => (
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
        </div>
      </section>
      <section
        className="flex flex-col md:items-start gap-8
      w-full pt-[2rem]"
      >
        <SectionHeader name="ongoing projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-32 mt-4">
          {projectData.map((el, idx) => (
            <ProjectCard
              key={idx}
              lang={el.lang}
              projectName={el.projectName}
              desc={el.desc}
              projectLink={el.projectLink}
              projectLink1={el.projectLink1}
              linkName1={el.linkName1}
            />
          ))}
        </div>
        <div
          className="
            absolute -left-2 -mt-8
            hidden xl:block
            w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-l-0
          "
        />
        <DotGrid
          cols={4}
          width={120}
          height={150}
          gap={-1}
          className="absolute right-0 mt-20 hidden xl:grid"
          dotClassName="bg-white/90"
        />

        <DotGrid
          cols={3}
          width={120}
          height={120}
          gap={-1}
          className="absolute -left-6 mt-[600px] hidden xl:grid"
          dotClassName="bg-white/90"
        />
      </section>
    </>
  );
}
