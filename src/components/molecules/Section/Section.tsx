import { Container } from "@/components/atoms/Container/Container";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BackgoundVariant =
  | "white"
  | "green"
  | "light-green"
  | "light-gray"
  | "dark-gray";

const backgorund = {
  white: "bg-white",
  green: "bg-green-500",
  "light-green": "bg-light-green",
  "light-gray": "bg-neutral-700",
  "dark-gray": "bg-zinc-800",
} as const;

const backgorundDark = {
  white: "dark:bg-white",
  green: "dark:bg-green-500",
  "light-green": "dark:bg-light-green",
  "light-gray": "dark:bg-neutral-700",
  "dark-gray": "dark:bg-zinc-800",
} as const;

type paddingVariant = "responsive" | "fixed" | "hero";

const padding = {
  responsive: "py-16 lg:py-24",
  fixed: "py-24",
  hero: "py-12 md:py-28",
} as const;

type SectionProps = {
  children: ReactNode;
  bgColor: { light: BackgoundVariant; dark: BackgoundVariant };
  ariaLabelledBy: string;
  paddingVariant?: paddingVariant;
  withMarginOnTop?: boolean;
  id?: string;
};

export const Section = ({
  children,
  ariaLabelledBy,
  bgColor,
  paddingVariant = "responsive",
  withMarginOnTop,
  id,
}: SectionProps) => (
  <section
    id={id}
    className={twMerge(
      padding[paddingVariant],
      withMarginOnTop === true && "mt-20 lg:mt-28",
      backgorund[bgColor.light],
      backgorundDark[bgColor.dark],
    )}
    aria-labelledby={ariaLabelledBy}
  >
    <Container>{children}</Container>
  </section>
);
