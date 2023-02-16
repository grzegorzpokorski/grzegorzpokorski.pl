import { Container } from "@/components/atoms/Container/Container";
import { ReactNode } from "react";

type BannerProps = {
  title: string;
  content?: string;
  children?: ReactNode;
};

export const Banner = ({ title, content, children }: BannerProps) => {
  return (
    <section className="py-24 bg-green-500">
      <Container>
        <header className="w-full md:w-2/3 text-center mx-auto text-white flex flex-col gap-5">
          <h2 className="text-3xl font-bold">{title}</h2>
          {content && <p>{content}</p>}
        </header>
        {children}
      </Container>
    </section>
  );
};
