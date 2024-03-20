import React from "react";
import classNames from "classnames";
import { FaGithub } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";

interface IProps {
  className?: string;
}
export const SocialLinks = ({ className }: IProps) => {
  return (
    <div className={classNames("absolute top-0 left-8", className)}>
      <div className="flex flex-col items-center gap-4">
        <span className="h-[271px] w-[2px] bg-sec"></span>
        <FaGithub className="text-sec" size={26}/>
        <FaMedium className="text-sec" size={24}/>
        <FaTwitter className="text-sec" size={26}/>

      </div>
    </div>
  );
};
