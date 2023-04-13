import { Container } from "@/components/atoms/Container/Container";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: ReactNode;
  ariaLabelledBy: string;
  withMarginOnTop?: boolean;
  className?: string;
  id?: string;
};

export const Section = ({
  children,
  ariaLabelledBy,
  className,
  id,
  withMarginOnTop,
}: SectionProps) => (
  <section
    id={id}
    className={twMerge(
      "py-16 lg:py-24",
      withMarginOnTop === true && "mt-20 lg:mt-28",
      className,
    )}
    aria-labelledby={ariaLabelledBy}
  >
    <Container>{children}</Container>
  </section>
);
