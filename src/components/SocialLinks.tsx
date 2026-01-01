import React from "react";
import classNames from "classnames";
import { FaGithub } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";
import ApLink from "./LInk";

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
          to="https://medium.com/aaron-sunday"
          className="text-paragraph-1  transition-colors break-all"
        >
          <FaMedium className="text-sec" size={24} />
        </ApLink>
        <ApLink
          to="https://x.com/asapconet"
          className="text-paragraph-1  transition-colors break-all"
        >
          <FaTwitter className="text-sec" size={26} />
        </ApLink>
      </div>
    </div>
  );
};
