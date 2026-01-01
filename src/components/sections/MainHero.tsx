import { DotsIcon1 } from "@/assets/Icons/Dots";
import { MixedShapeLogo1 } from "@/assets/Icons/MixedShapeLogo";
import myCover from "@/assets/myCover.png";
import Image from "next/image";
import ApButton from "../Button";

export default function MainHero() {
  return (
    <section
      className="
        relative flex flex-col md:flex-row
        items-center justify-between
        gap-8
        max-w-[1024px] w-full
        pt-16 md:pt-20
      "
    >
      <div className="flex flex-col gap-6 max-w-[520px] sm:pt-10">
        <p className="heading-1-sm">
          Aaron is a <span className="text-pri"> Software engineer</span> and a
          <span className="text-pri"> Technical writer</span>
        </p>
        <p className="paragraph-1s text-sec">
          He crafts robust web applications where technologies meet creativity
        </p>
        <ApButton className="hidden sm:block" asLink="contact">
          {" "}
          Contact Me !!
        </ApButton>
      </div>
      <div className="relative w-full max-w-[469px] aspect-[469/388]">
        <MixedShapeLogo1 className="pt-[4.8rem]" />
        <Image
          className="absolute top-0 right-0 object-contain"
          alt=""
          src={myCover}
          fill
          priority
        />
        <div className="absolute right-4 bottom-12">
          <DotsIcon1 />
        </div>
      </div>
      <div
        className="
        absolute right-4 md:right-10  -bottom-14 w-[90%] sm:w-[402px] h-auto
          px-4 py-3 border border-white backdrop-blur
        "
      >
        <p className="paragraph-1 flex items-center gap-1 sm:gap-2 ">
          <span className="w-[16px] h-[16px] bg-pri"></span>
          <span> Currently building </span>
          <span className="text-sec"> Rust APIs</span>
        </p>
      </div>
    </section>
  );
}
