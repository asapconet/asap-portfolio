import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { MdMail } from "react-icons/md";
import ApLink from "../LInk";
import { FaLinkedin } from "react-icons/fa";

export default function ContactMeSection() {
  return (
    <section className="flex flex-col gap-4 max-w-[1024px] w-full pt-[4rem] pb-16">
      <DotGrid
        cols={3}
        width={120}
        height={120}
        gap={-1}
        className="absolute -left-6 mt-20 hidden xl:grid"
        dotClassName="bg-white/90"
      />

      <SectionHeader name="contact" />
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12 w-full">
        <div className="flex flex-col gap-4 md:w-[50%] lg:w-[515px] text-sec">
          <p className="paragraph-1-s !leading-7">
            I&apos;m interested in freelance opportunities. However, if you have
            other request or question, don&apos;t hesitate to contact me
          </p>
        </div>

        <div className="border border-white p-4 md:p-6 h-fit md:w-[45%] lg:w-auto">
          <h3 className="heading-3 mb-4 text-left">Message me here</h3>
          <div className="flex flex-col gap-3 text-sec">
            <div className="flex flex-row items-center gap-3">
              <FaLinkedin size={24} className="flex-shrink-0 md:size-7" />
              <ApLink
                to="https://www.linkedin.com/in/aaron-sunday-the-buffer/"
                className="text-paragraph-1 hover:text-pri transition-colors break-all"
              >
                Aaron Sunday
              </ApLink>
            </div>

            <div className="flex flex-row items-center gap-3">
              <MdMail size={24} className="flex-shrink-0 md:size-7" />
              <ApLink
                to="mailto:aaronrickymeek@gmail.com"
                className="text-paragraph-1 hover:text-pri transition-colors break-all"
              >
                aaronrickymeek@gmail.com
              </ApLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
