import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  variant?: "default" | "banner";
  size?: "small" | "default" | "hero" | "logo" | "banner";
  id?: string;
};

const baseStyles = twMerge("font-bold text-balance");

const variants = {
  default: "text-zinc-800 dark:text-zinc-200",
  banner: "dark:text-zinc-800",
} as const;

const sizes = {
  default: "text-3xl md:text-4xl",
  small: "text-2xl md:text-3xl",
  hero: "text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-[1.2]",
  logo: "text-lg",
  banner: "text-3xl",
} as const;

export const Heading = ({
  as: Tag,
  children,
  variant,
  size,
  id,
}: HeadingProps) => {
  return (
    <Tag
      className={twMerge(
        baseStyles,
        variant && variants[variant],
        size && sizes[size],
      )}
      id={id}
    >
      {children}
    </Tag>
  );
};
