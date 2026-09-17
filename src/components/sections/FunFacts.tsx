import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { MixedShapeSmall } from "@/assets/Icons/MixedShapeSmall";
import { FunCard } from "../FunCard";
import { funFacts } from "@/static/data/funFacts";
import { StaggerGrid, RevealItem } from "../animations/RevealOnScroll";

export default function FunFacts() {
  return (
    <section className="flex flex-col items-start gap-4 w-full max-w-screen-lg min-w-0 pt-[3rem]">
      <SectionHeader name="fun-facts" />

      <div className="flex flex-col lg:flex-row gap-2 w-full min-w-0 mt-4 sm:mt-12 mb-32">
        <StaggerGrid
          className="flex-1 min-w-0 flex flex-wrap gap-2 w-full"
          stagger={0.06}
        >
          {funFacts.map((fax, idx) => (
            <RevealItem key={idx} className="min-w-0">
              <FunCard facts={[fax]} />
            </RevealItem>
          ))}
        </StaggerGrid>

        <div className="hidden lg:flex justify-between gap-4 pr-4 w-[30%] min-h-[285px] shrink-0">
          <div className="flex flex-col items-center justify-center gap-8">
            <DotGrid
              cols={5}
              rows={5}
              width={105}
              height={105}
              gap={-1}
              className="mt-12 -ml-44"
              dotClassName="bg-white/90"
            />

            <MixedShapeSmall className="mx-44" />
          </div>
        </div>
      </div>
    </section>
  );
}
