import { SectionHeader } from "@/components/SectionHeader";
import { MdMail, MdMessage } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import ApLink from "./LInk";
import { HeaderLogo } from "@/assets/Icons/HeaderLogo";
import { FaMedium, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full pt-16 sm:pt-20 md:pt-24  border-t border-white">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 pb-8 sm:pb-12">
          <div className="flex flex-col gap-4 max-w-[400px]">
            <div className="flex items-center gap-2">
              <HeaderLogo />
              <h3 className="heading-3 text-lg sm:text-xl">Aaron</h3>
            </div>
            <p className="paragraph-1-s text-sec text-sm sm:text-base">
              Software Engineer and front-end developer
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="heading-3 text-base sm:text-lg">Media</h3>
            <div className="flex gap-3 sm:gap-4">
              <ApLink
                to="https://medium.com/@aaronrickymee"
                className="hover:text-pri transition-colors"
                aria-label="Medium"
              >
                <FaMedium size={24} className="sm:w-7 sm:h-7" />
              </ApLink>
              <ApLink
                to="https://twitter.com/aaronrickymee"
                className="hover:text-pri transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} className="sm:w-7 sm:h-7" />
              </ApLink>
              <ApLink
                to="https://discord.com/users/aaronrickymee"
                className="hover:text-pri transition-colors"
                aria-label="Discord"
              >
                <MdMessage size={24} className="sm:w-7 sm:h-7" />
              </ApLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1336px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="paragraph-1 text-sec text-center text-sm sm:text-base">
            © Copyright 2026. Cooked by Aaron
          </p>
        </div>
      </div>
    </footer>
  );
}
