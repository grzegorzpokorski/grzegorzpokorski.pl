import type { JSX } from "react";

type ContainerProps = JSX.IntrinsicElements["div"] & {
  as?: "div" | "article";
};

export const Container = ({
  as: Tag = "div",
  children,
  ...props
}: ContainerProps) => (
  <Tag className="container mx-auto px-3" {...props}>
    {children}
  </Tag>
);
