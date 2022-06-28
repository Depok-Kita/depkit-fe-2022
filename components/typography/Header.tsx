import { ReactNode } from "react";

type HeaderProps = {
  className?: string;
  preset: "decorative" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
  children: ReactNode;
  decorative?: boolean;
};

export const Header = ({
  className,
  preset,
  children,
  decorative,
}: HeaderProps) => {
  return (
    <h1
      className={`${
        preset === "h1"
          ? "font-jakarta-sans font-bold text-[4rem]"
          : preset === "h2"
          ? "font-jakarta-sans font-bold text-[3rem]"
          : preset === "h3"
          ? "font-jakarta-sans font-bold text-[2rem]"
          : preset === "h4"
          ? "font-jakarta-sans font-bold text-[1.5rem]"
          : preset === "h5"
          ? "font-jakarta-sans font-bold text-[1.25rem]"
          : "font-jakarta-sans font-bold text-[1rem]"
      }
      ${decorative ? "tracking-[0.03em] text-[4rem] decorative" : ""}
      ${className}`}
    >
      {children}
    </h1>
  );
};
