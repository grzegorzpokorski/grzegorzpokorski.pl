import { getSlug } from "@/utils/getSlug";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Section } from "../Section/Section";
import { Heading } from "@/components/atoms/Heading/Heading";

type HeroProps = {
  title: string;
  description?: ReactNode;
  links?: ReactNode;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  titleAsH1?: boolean;
  imageFirst?: boolean;
  className?: string;
  alignToLeftOnMobile?: boolean;
};

export const Hero = ({
  title,
  description,
  links,
  image,
  titleAsH1,
  imageFirst,
  alignToLeftOnMobile,
}: HeroProps) => {
  return (
    <Section
      ariaLabelledBy={getSlug(title)}
      id="hero"
      bgColor={{ light: "white", dark: "dark-gray" }}
      paddingVariant="hero"
      withMarginOnTop
    >
      <div
        className={twMerge(
          "flex flex-col md:flex-row",
          imageFirst && "flex-col-reverse md:flex-row-reverse",
          "items-center gap-3",
        )}
      >
        <header
          className={twMerge(
            "md:w-1/2 flex flex-col gap-6 md:text-left",
            alignToLeftOnMobile
              ? "text-left items-start"
              : "text-center items-center md:items-start",
          )}
        >
          <Heading
            as={titleAsH1 ? "h1" : "h2"}
            id={getSlug(title)}
            size="hero"
            variant="default"
          >
            {title}
          </Heading>
          <div className="prose dark:prose-invert max-w-none">
            {description && description}
          </div>
          {links && (
            <div
              className={twMerge(
                "flex flex-col sm:flex-row flex-wrap gap-2 justify-center md:justify-start",
                alignToLeftOnMobile ? "items-start" : "items-center",
              )}
            >
              {links}
            </div>
          )}
        </header>
        <picture className="w-full md:w-1/2">
          <Image
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 720px) 100vw, 50vw"
            className="max-w-full h-auto"
            priority
          />
        </picture>
      </div>
    </Section>
  );
};
