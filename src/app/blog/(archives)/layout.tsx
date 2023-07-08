import type { ReactNode } from "react";
import { Main } from "@/components/atoms/Main/Main";
import { DefaultBanner } from "@/components/templates/DefaultBanner/DefaultBanner";
import { Section } from "@/components/molecules/Section/Section";

export default function BlogLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <Main withMarginOnTop>
      <Section
        bgColor={{ light: "light-green", dark: "light-gray" }}
        ariaLabelledBy="archive-title"
      >
        {children}
      </Section>
      <DefaultBanner />
    </Main>
  );
}
