import { ReactNode } from "react";
import { Container } from "@/components/atoms/Container/Container";

export const BlogHeader = ({ children }: { children: ReactNode }) => (
  <section className="py-16 lg:py-24 bg-light-green">
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
        {children}
      </div>
    </Container>
  </section>
);
