import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { DotGrid } from "@/components/DotGrids";
import { MixedShapeSmall } from "@/assets/Icons/MixedShapeSmall";
import { skillsData } from "@/static/data/skills";

export default function SkillsSection() {
  return (
    <section className="flex flex-col items-start gap-4 max-w-[1024px] w-full pt-[4rem] px-4 md:px-0">
      <SectionHeader name="skills" />

      <div className="flex flex-col lg:flex-row gap-6 w-full mb-32">
        <div className="hidden lg:flex justify-between gap-4 max-w-[410px] pr-4 w-full min-h-[285px]">
          <div className="flex flex-col gap-8">
            <DotGrid
              cols={5}
              rows={5}
              width={105}
              height={105}
              gap={-1}
              className="mt-12"
              dotClassName="bg-white/90"
            />
            <MixedShapeSmall className="px-10" />
          </div>

          <div className="flex flex-col gap-8 w-full relative">
            <div className="w-[86px] h-[86px] border border-white ml-10" />
            <DotGrid
              cols={5}
              rows={5}
              width={105}
              height={105}
              gap={-1}
              className="flex justify-start"
              dotClassName="bg-white/90"
            />
            <div className="w-[56px] h-[56px] border border-white absolute right-0 bottom-24" />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.slice(0, 3).map((skill, idx) => (
            <SkillCard
              key={idx}
              skillType={skill.skillType}
              skillSets={skill.skillSets}
            />
          ))}

          <div className="hidden lg:block" />

          {skillsData.slice(3).map((skill, idx) => (
            <SkillCard
              key={idx + 3}
              skillType={skill.skillType}
              skillSets={skill.skillSets}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
