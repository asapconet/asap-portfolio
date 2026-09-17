"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { DotGrid } from "@/components/DotGrids";
import { MdMail, MdDownload } from "react-icons/md";
import ApLink from "../LInk";
import { FaLinkedin } from "react-icons/fa";
import ApButton from "../Button";
import Magnetic from "../animations/Magnetic";
import { motion } from "framer-motion";

function TerminalLink({
  icon,
  to,
  label,
}: {
  icon: React.ReactNode;
  to: string;
  label: string;
}) {
  return (
    <div className="group flex flex-row items-center gap-3">
      {icon}
      <span className="text-pri opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
        $
      </span>
      <ApLink
        to={to}
        className="text-paragraph-1 group-hover:text-pri transition-colors break-all"
      >
        {label}
      </ApLink>
    </div>
  );
}

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
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:w-[50%] lg:w-[515px] text-sec"
        >
          <p className="paragraph-1-s !leading-7">
            I&apos;m interested in full time, freelance and or part time
            opportunities. However, if you have other request or question,
            don&apos;t hesitate to contact me
          </p>

          <Magnetic className="w-fit">
            <ApButton
              asLink="/resume/Aaron-Sunday-Resume.pdf"
              leftIcon={<MdDownload size={18} className="text-white ml-2" />}
            >
              Download Resume
            </ApButton>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0.85, transformOrigin: "top" }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border border-white p-4 md:p-6 h-fit md:w-[45%] lg:w-auto"
        >
          <h3 className="heading-3 mb-4 text-left">Message me here</h3>
          <div className="flex flex-col gap-3 text-sec">
            <TerminalLink
              icon={
                <FaLinkedin size={24} className="flex-shrink-0 md:size-7" />
              }
              to="https://www.linkedin.com/in/aaron-sunday-the-buffer/"
              label="Aaron Sunday"
            />
            <TerminalLink
              icon={<MdMail size={24} className="flex-shrink-0 md:size-7" />}
              to="mailto:aaronrickymeek@gmail.com"
              label="aaronrickymeek@gmail.com"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
