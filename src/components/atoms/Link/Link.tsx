import { ReactNode, FC } from "react";
import LinkNext from "next/link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tabIndex?: number;
  onClick?: () => void;
};

export const Link = (props: LinkProps) => {
  const isInternal = props.href
    ? props.href.startsWith("#") || props.href.startsWith("/")
    : false;

  return isInternal ? (
    <LinkNext
      href={props.href}
      onClick={props.onClick}
      className={props.className}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </LinkNext>
  ) : (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {props.children}
    </a>
  );
};
