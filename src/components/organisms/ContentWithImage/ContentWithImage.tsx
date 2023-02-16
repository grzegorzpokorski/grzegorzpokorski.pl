import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { getIDFromString } from "@/utils/getIDFromString";
import { twMerge } from "tailwind-merge";
import { Link } from "@/components/atoms/Link/Link";
import { Section } from "@/components/molecules/Section/Section";
import { Container } from "@/components/atoms/Container/Container";
import { Header } from "@/components/atoms/Header/Header";

type ContentWithImageProps = {
  subtitle: string;
  title: string;
  content?: ReactNode;
  href?: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  reverse?: boolean;
  className?: string;
};

export const ContentWithImage = ({
  subtitle,
  title,
  content,
  href,
  image,
  reverse,
  className,
}: ContentWithImageProps) => {
  return (
    <Section id={getIDFromString(title)} className={className}>
      <Container
        className={twMerge(
          "flex flex-col gap-3 items-center",
          reverse ? "md:flex-row" : "md:flex-row-reverse",
        )}
      >
        <div className="w-full md:w-1/2">
          <Header title={title} subtitle={subtitle} />
          {content && <div className="prose mt-6">{content}</div>}
          {href && (
            <footer className="flex flex-row items-start mt-6">
              <Link href={href} buttonStyle="green">
                Zapytaj o ofertę
              </Link>
            </footer>
          )}
        </div>
        <picture className="w-full w-full md:w-1/2">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              className="max-w-full h-auto"
              sizes="(max-width: 720px) 100vw, 50vw"
            />
          )}
        </picture>
      </Container>
    </Section>
  );
};
