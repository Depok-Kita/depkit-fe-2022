import React from "react";
import { BUTTON_PRESETS } from "./Button.presets";
import { Header, useWindowSize } from "@components";
type ButtonProps = {
  className?: string;

  to?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  padding?: string;
  border?: string;

  leftIcon?: React.SVGAttributes<SVGElement>;
  rightIcon?: React.SVGAttributes<SVGElement>;

  preset:
    | "primaryDark"
    | "primaryLight"
    | "secondaryDark"
    | "secondaryLight"
    | "tertiaryDark"
    | "tertiaryLight"
    | "linkDark"
    | "linkLight";

  children?: React.ReactNode;
  [props: string]: any;
};

export const Button = ({
  children,
  className,
  preset,
  padding,
  border,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const { width } = useWindowSize();
  return (
    <button
      className={`transition-all flex justify-center items-center gap-2 
      ${BUTTON_PRESETS[preset].text} md:text-base text-sm font-semibold 
      ${BUTTON_PRESETS[preset].border} 
      ${border ? border : BUTTON_PRESETS[preset].borderWidth} 
      ${border ? border : BUTTON_PRESETS[preset].borderColor} 
      ${BUTTON_PRESETS[preset].hover} 
      ${BUTTON_PRESETS[preset].color} 
      ${padding ? padding : "py-3 px-5"} 
      ${BUTTON_PRESETS[preset].disabled} 
      ${className}`}
      {...props}
    >
      {leftIcon ? <>{leftIcon}</> : null}

      <Header preset={width >= 1280 ? "h6" : width >= 768 ? "h7" : "h7"}>
        {children}
      </Header>
      {rightIcon ? <>{rightIcon}</> : null}
    </button>
  );
};
