import { Container } from "@/components/atoms/Container/Container";
import { ReactNode } from "react";

type BannerProps = {
  title: string;
  content?: string;
  buttons?: ReactNode;
};

export const Banner = ({ title, content, buttons }: BannerProps) => {
  return (
    <section className="py-24 bg-green-500">
      <Container>
        <header className="w-full md:w-2/3 text-center mx-auto text-white flex flex-col gap-5">
          <h2 className="text-3xl font-bold dark:text-zinc-800">{title}</h2>
          {content && <p className="dark:text-zinc-800">{content}</p>}
          {buttons && (
            <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
              {buttons}
            </div>
          )}
        </header>
      </Container>
    </section>
  );
};
