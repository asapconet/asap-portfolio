import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { MixedShapeSmall } from "@/assets/Icons/MixedShapeSmall";
import { FunCard } from "../FunCard";
import { funFacts } from "@/static/data/funFacts";

export default function FunFacts() {
  return (
    <section className="flex flex-col items-start gap-4 max-w-[1024px] w-full pt-[3rem]">
      <SectionHeader name="fun-facts" />

      <div className="flex flex-col lg:flex-row gap-2 w-full mt-4 sm:mt-12 mb-32">
        <div className="flex-1 flex flex-wrap gap-2 w-full">
          {funFacts.map((fax, idx) => (
            <FunCard key={idx} facts={[fax]} />
          ))}
        </div>
        <div className="hidden lg:flex justify-between gap-4 pr-4 w-[30%] min-h-[285px]">
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
