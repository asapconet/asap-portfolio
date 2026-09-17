import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { DotGrid } from "@/components/DotGrids";
import { MixedShapeSmall } from "@/assets/Icons/MixedShapeSmall";
import { skillsData } from "@/static/data/skills";
import { RevealItem, StaggerGrid } from "../animations/RevealOnScroll";
import { SP } from "next/dist/shared/lib/utils";

export default function SkillsSection({
  withAiestetics = true,
}: {
  withAiestetics?: boolean;
}) {
  return (
    <section className="flex flex-col items-start gap-4 max-w-screen-lg w-full pt-[4rem]">
      <SectionHeader name="skills" />

      {withAiestetics ? (
        <div className="flex flex-col lg:flex-row gap-6 w-full mt-4 mb-32">
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

          <StaggerGrid className="flex-1 columns-1 sm:columns-2 md:columns-3 gap-4">
            {skillsData.map((skill, idx) => (
              <RevealItem key={idx} className="break-inside-avoid mb-4">
                <SkillCard
                  skillType={skill.skillType}
                  skillSets={skill.skillSets}
                />
              </RevealItem>
            ))}
          </StaggerGrid>
        </div>
      ) : (
        <StaggerGrid className="columns-1 sm:columns-2 md:columns-4 lg:columns-5 gap-4">
          {skillsData.map((skill, idx) => (
            <RevealItem key={idx} className="break-inside-avoid mb-4">
              <SkillCard
                skillType={skill.skillType}
                skillSets={skill.skillSets}
              />
            </RevealItem>
          ))}
        </StaggerGrid>
      )}
    </section>
  );
}
