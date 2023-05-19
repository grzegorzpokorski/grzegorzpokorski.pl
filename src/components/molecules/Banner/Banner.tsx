import { ReactNode } from "react";
import { getSlug } from "@/utils/getSlug";
import { Section } from "@/components/molecules/Section/Section";

type BannerProps = {
  title: string;
  content?: string;
  buttons?: ReactNode;
};

export const Banner = ({ title, content, buttons }: BannerProps) => {
  return (
    <Section
      ariaLabelledBy={getSlug(title)}
      bgColor={{ light: "green", dark: "green" }}
      paddingVariant="fixed"
    >
      <header className="w-full md:w-2/3 text-center mx-auto text-white flex flex-col gap-5">
        <h2
          className="text-3xl font-bold dark:text-zinc-800"
          id={getSlug(title)}
        >
          {title}
        </h2>
        {content && <p className="dark:text-zinc-800">{content}</p>}
        {buttons && (
          <div className="flex flex-row flex-wrap gap-2 justify-center items-center">
            {buttons}
          </div>
        )}
      </header>
    </Section>
  );
};
