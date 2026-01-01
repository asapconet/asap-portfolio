import classNames from "classnames";
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import React, { useRef } from "react";
import ApLink from "./LInk";

interface IProps {
  leftIcon?: any;
  rightIcon?: any;
  isDisabled?: boolean;
  ghost?: boolean;
  asLink?: string;
  children: React.ReactNode;
  variant?: string;
  size?: string;
  className?: string;
  onClick?: () => void;
}

const ApButton = ({
  leftIcon,
  isDisabled,
  rightIcon,
  ghost,
  asLink,
  children,
  variant = "pri",
  size = "sm",
  className,
  ...rest
}: IProps) => {
  const linkRef = useRef<HTMLElement>(null);

  interface IconProp {
    [index: string]: React.ReactNode;
  }

  const icon: IconProp = {
    arrow: <BsArrowRight className="text-white" />,
    chevron: <BsChevronRight className="text-white" />,
  };

  const handleClick = () => {
    rest?.onClick?.();
    if (asLink) linkRef.current?.click();
  };

  return (
    <>
      <button
        disabled={isDisabled}
        {...rest}
        onClick={handleClick}
        className={classNames(
          "flex items-center max-w-max justify-center border border-pri",
          className,
        )}
      >
        {leftIcon && <span>{(leftIcon && icon[leftIcon]) || leftIcon}</span>}

        <span
          className={classNames("block text-white py-[.55rem] px-3", {
            "ml-1": leftIcon,
            "mr-0": rightIcon,
          })}
        >
          {children}
        </span>

        {rightIcon && (
          <span className="pr-2">
            {(rightIcon && icon[rightIcon]) || rightIcon}
          </span>
        )}
      </button>
      {asLink && <ApLink ref={linkRef} to={asLink} className="!m-0 sr-only" />}
    </>
  );
};

export default ApButton;
