import { ReactNode } from "react";
import { Main } from "@/components/atoms/Main/Main";
import { Container } from "@/components/atoms/Container/Container";
import { DefaultBanner } from "@/components/templates/DefaultBanner/DefaultBanner";

export default function BlogLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <Main withMarginOnTop>
      <section className="py-16 lg:py-24 bg-light-green dark:bg-neutral-700">
        <Container>{children}</Container>
      </section>
      <DefaultBanner />
    </Main>
  );
}
