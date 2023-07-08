import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/atoms/Heading/Heading";

type HeaderProps = {
  subtitle?: string;
  title: string;
  titleId: string;
  description?: ReactNode;
  centered?: boolean;
  titleAsH1?: boolean;
  children?: ReactNode;
  className?: string;
};

export const Header = ({
  subtitle,
  title,
  titleId,
  description,
  centered,
  titleAsH1,
  children,
  className,
}: HeaderProps) => (
  <header
    className={twMerge(
      "w-full mr-auto flex flex-col gap-4",
      centered && "text-center mx-auto md:w-4/6",
      className,
    )}
  >
    {subtitle && (
      <span className="uppercase font-bold text-green-500">{subtitle}</span>
    )}
    {titleAsH1 ? (
      <Heading as="h1" size="default" id={titleId} variant="default">
        {title}
      </Heading>
    ) : (
      <Heading as="h2" size="small" id={titleId} variant="default">
        {title}
      </Heading>
    )}
    {description && (
      <div className="prose dark:prose-invert max-w-none">{description}</div>
    )}
    {children}
  </header>
);
