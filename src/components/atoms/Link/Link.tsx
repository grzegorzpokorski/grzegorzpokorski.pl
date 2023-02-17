import { AnchorHTMLAttributes, ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonVariants =
  | "green"
  | "green-outline"
  | "white"
  | "white-outline"
  | "tag"
  | "share-social";

const baseButtonStyles =
  "inline-flex transition-colors border-2 rounded px-4 md:px-6 py-2 md:py-3 text-base text-center disabled:cursor-not-allowed rounded flex flex-row items-center justify-center gap-1.5";

const buttonVariants = {
  white: twMerge(
    baseButtonStyles,
    "bg-white hover:bg-slate-100 text-gray-800 border-white",
  ),
  "white-outline": twMerge(
    baseButtonStyles,
    "bg-transparent hover:bg-white text-white hover:text-gray-800 border-white",
  ),
  green: twMerge(
    baseButtonStyles,
    "bg-green-500 hover:bg-green-600 text-white dark:text-zinc-800 border-green-500",
  ),
  "green-outline": twMerge(
    baseButtonStyles,
    "bg-transparent hover:bg-green-500 text-green-500 hover:text-white dark:hover:text-zinc-800 border-green-500",
  ),
  tag: "inline-flex transition-colors rounded px-2.5 py-1.5 text-xs bg-zinc-200 dark:bg-zinc-700 hover:bg-green-500 dark:hover:bg-green-500 text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-zinc-800",
  "share-social":
    "inline-flex transition-colors border-2 rounded px-3 md:px-4 py-2 md:py-3 bg-green-500 hover:bg-green-600 text-white border-green-500 ",
} as const;

export type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
  onClick?: () => void;
  buttonStyle?: ButtonVariants;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  const isInternal = props.href
    ? props.href.startsWith("#") || props.href.startsWith("/")
    : false;

  return isInternal ? (
    <LinkNext
      href={props.href}
      onClick={props.onClick}
      className={twMerge(
        props.buttonStyle && buttonVariants[props.buttonStyle],
        props.className,
      )}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </LinkNext>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      className={twMerge(
        props.buttonStyle && buttonVariants[props.buttonStyle],
        props.className,
      )}
    >
      {props.children}
    </a>
  );
};
