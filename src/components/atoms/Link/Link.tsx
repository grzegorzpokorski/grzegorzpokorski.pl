import type { AnchorHTMLAttributes, ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type LinkVariant =
  | "green"
  | "green-outline"
  | "white"
  | "white-outline"
  | "tag"
  | "share-social"
  | "dark"
  | "dark-outline"
  | "footer-link"
  | "social-menu-link"
  | "social-menu-link-mobile-nav"
  | "skip-to-the-content"
  | "with-icon"
  | "post-item-title"
  | "banner";

const baseStyles = twMerge(
  "inline-flex border-2 rounded",
  "px-4 md:px-6 py-2 md:py-3",
  "text-base text-center",
  "disabled:cursor-not-allowed",
  "items-center justify-center",
  "gap-1.5",
);
const transitionStyles = "transition-colors motion-reduce:transition-none";

const linkVariants = {
  white: twMerge(
    baseStyles,
    "bg-white hover:bg-slate-100",
    "text-gray-800",
    "border-white",
    "dark:bg-zinc-800 dark:hover:bg-zinc-900",
    "dark:text-white",
    "dark:border-zinc-800",
  ),
  "white-outline": twMerge(
    baseStyles,
    "bg-transparent hover:bg-white",
    "text-white hover:text-gray-800",
    "border-white",
  ),
  dark: twMerge(
    baseStyles,
    "bg-zinc-800 hover:bg-zinc-900",
    "text-white",
    "border-zinc-800",
    "dark:bg-white dark:hover:bg-slate-100",
    "dark:text-gray-800",
    "dark:border-white",
  ),
  "dark-outline": twMerge(
    baseStyles,
    "bg-transparent hover:bg-zinc-800",
    "text-zinc-800 hover:text-white",
    "border-zinc-800",
  ),
  green: twMerge(
    baseStyles,
    "bg-green-500 hover:bg-green-600",
    "text-white dark:text-zinc-800",
    "border-green-500",
  ),
  "green-outline": twMerge(
    baseStyles,
    "bg-transparent hover:bg-green-500",
    "text-green-500 hover:text-white dark:hover:text-zinc-800",
    "border-green-500",
  ),
  tag: twMerge(
    "inline-flex rounded",
    "px-2.5 py-1.5",
    "bg-zinc-200 dark:bg-zinc-700 hover:bg-green-500 dark:hover:bg-green-500",
    "text-xs text-zinc-500 dark:text-zinc-400 hover:text-white dark:hover:text-zinc-800",
  ),
  "share-social": twMerge(
    "inline-flex rounded",
    "px-3 md:px-4 py-2 md:py-3",
    "bg-green-500 hover:bg-green-600",
    "text-white",
    "border-2 border-green-500",
  ),
  "footer-link": "hover:underline dark:text-zinc-200",
  "social-menu-link": "text-green-500 hover:text-green-700",
  "social-menu-link-mobile-nav": twMerge(
    "text-white dark:text-zinc-800",
    "hover:text-green-500 dark:hover:text-white",
    "md:hover:text-green-500",
    "lg:text-zinc-600 lg:dark:text-white lg:dark:hover:text-green-500",
  ),
  "skip-to-the-content": twMerge(
    "fixed block",
    "py-4 px-8 m-4",
    "bg-gray-500 text-white",
    "left-[-9999px] top-[-9999px]",
    "focus:left-0 focus:top-0 focus:z-[1000]",
  ),
  "with-icon": "flex flex-row items-center hover:underline",
  "post-item-title": twMerge(
    "text-zinc-800 dark:text-zinc-200",
    "hover:text-green-500 dark:hover:text-green-500",
  ),
  banner: twMerge(
    baseStyles,
    "bg-transparent hover:bg-white",
    "text-white hover:text-gray-800",
    "border-white",
    "dark:bg-transparent dark:hover:bg-zinc-800",
    "dark:text-zinc-800 dark:hover:text-white",
    "dark:border-zinc-800",
  ),
} as const;

export type LinkProps = {
  href: string;
  children: ReactNode;
  tabIndex?: number;
  onClick?: () => void;
  variant?: LinkVariant;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = (props: LinkProps) => {
  const isInternal = ["#", "/"].some((item) => props.href.startsWith(item))
    ? true
    : false;

  if (isInternal) {
    return (
      <LinkNext
        href={props.href}
        onClick={props.onClick}
        className={twMerge(
          transitionStyles,
          props.variant && linkVariants[props.variant],
        )}
        tabIndex={props.tabIndex}
        aria-hidden={props["aria-hidden"]}
      >
        {props.children}
      </LinkNext>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      className={twMerge(props.variant && linkVariants[props.variant])}
    >
      {props.children}
    </a>
  );
};
