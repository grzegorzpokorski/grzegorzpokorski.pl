import type { ReactNode } from "react";
import { Section } from "@/components/molecules/Section/Section";
import { Heading } from "@/components/atoms/Heading/Heading";
import { getSlug } from "@/utils/getSlug";

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
        <Heading as="h2" variant="banner" size="banner" id={getSlug(title)}>
          {title}
        </Heading>
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
