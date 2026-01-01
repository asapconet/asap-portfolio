import React from "react";
import classNames from "classnames";
import { FaGithub } from "react-icons/fa";
import ApLink from "./LInk";
import { BsMedium } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

interface IProps {
  className?: string;
}
export const SocialLinks = ({ className }: IProps) => {
  return (
    <div className={classNames("absolute top-0 left-2", className)}>
      <div className="flex flex-col items-center gap-4">
        <span className="h-[211px] w-[2px] bg-sec" />
        <ApLink
          to="https://github.com/asapconet"
          className="text-paragraph-1  transition-colors break-all"
        >
          <FaGithub className="text-sec" size={26} />
        </ApLink>
        <ApLink
          to="https://medium.com/@asap-a1"
          className="text-paragraph-1  transition-colors break-all"
        >
          <BsMedium className="text-sec" size={24} />
        </ApLink>
        <ApLink
          to="https://x.com/asapconet"
          className="text-paragraph-1  transition-colors break-all"
        >
          <RiTwitterXLine className="text-sec" size={26} />
        </ApLink>
      </div>
    </div>
  );
};
