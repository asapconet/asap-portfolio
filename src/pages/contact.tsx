import { DotGrid } from "@/components/DotGrids";
import ApLink from "@/components/LInk";
import { SectionHeader } from "@/components/SectionHeader";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      {" "}
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
            <h2 className="">contacts</h2>
          </div>
          <div className=" text-sec text-paragraph-1">To connect?</div>
        </div>
        <div
          className="
          absolute -right-6
          hidden xl:block mt-96
          w-12 md:w-[80px] h-24 md:h-[155px] border border-white border-r-0
        "
        />
      </div>
      <section className="flex flex-col gap-4 max-w-[1024px] w-full pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="flex flex-col gap-4 md:w-[50%] lg:w-[515px] text-sec">
            <p className="paragraph-1-s !leading-7">
              I&apos;m interested in freelance opportunities. However, if you
              have other request or question, don&apos;t hesitate to contact me
            </p>
          </div>

          <div className="border border-white p-4 md:p-6 h-fit md:w-[45%] lg:w-auto">
            <h3 className="heading-3 mb-4 text-left">Message me here</h3>
            <div className="flex flex-col gap-3 text-sec">
              <div className="flex flex-row items-center gap-3">
                <FaPhoneAlt size={24} className="flex-shrink-0 md:size-7" />
                <ApLink
                  to="tel:+2348064669480"
                  className="text-paragraph-1 hover:text-pri transition-colors break-all"
                >
                  (+234) 806-466-9480
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

        <div className="mt-8 ">
          <div className="">
            <div className="flex items-center heading-2 sm:heading-1-sm">
              <span className="text-pri">#</span>
              <h2 className="">my socials</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sec text-paragraph-1 mt-4">
            <div className="flex flex-row items-center gap-1">
              <RiTwitterXLine size={14} className="flex-shrink-0 md:size-5" />
              <ApLink
                to="https://x.com/asapconet"
                className="text-paragraph-1 hover:text-pri transition-colors break-all"
              >
                @asapconet
              </ApLink>
            </div>
            <div className="flex flex-row items-center gap-1">
              <FaMedium size={14} className="flex-shrink-0 md:size-5" />
              <ApLink
                to="https://medium.com/@asap-a1"
                className="text-paragraph-1 hover:text-pri transition-colors break-all"
              >
                Aaron Sunday
              </ApLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
