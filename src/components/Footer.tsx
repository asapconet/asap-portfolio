import { SectionHeader } from "@/components/SectionHeader";
import { MdMail, MdMessage } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import ApLink from "./LInk";
import { HeaderLogo } from "@/assets/Icons/HeaderLogo";
import { FaMedium, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center gap-4 max-w-[1024px] h-[204px] w-full pt-[4rem]
      pb-16 px-4 sm:px-6 lg:px-8
      border-t border-white"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12 w-full">
        <div className="flex flex-col gap-4 md:w-[50%] lg:w-[515px] ">
          <ApLink to="/" className="flex gap-2 items-center">
            <HeaderLogo /> Aaron
          </ApLink>
          <p className="paragraph-1-s !leading-7">
            Software Engineer and front-end developer
          </p>
        </div>

        <div className="h-fit md:w-[45%] lg:w-auto flex justify-end sm:block">
          <h3 className="heading-2 mb-4 text-left">Media</h3>
          <div className="flex gap-2 text-sec">
            <ApLink
              to="#"
              className="text-paragraph-1  transition-colors break-all"
            >
              <RiWhatsappFill
                size={24}
                className=" text-sec flex-shrink-0 md:size-7"
              />
            </ApLink>

            <ApLink
              to="https://x.com/asapconet"
              className="text-paragraph-1  transition-colors break-all"
            >
              <FaTwitter
                className="flex-shrink-0 md:size-7 text-sec"
                size={26}
              />
            </ApLink>

            <ApLink
              to="#"
              className="text-paragraph-1 hover:text-pri transition-colors break-all"
            >
              <FaMedium
                className="flex-shrink-0 md:size-7 text-sec"
                size={24}
              />
            </ApLink>
          </div>
        </div>
      </div>
      <div className="text-sec mt-4">© Copyright 2026. Cooked by Aaron</div>
    </footer>
  );
}
