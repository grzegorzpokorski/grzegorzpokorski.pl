"use client";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { Link } from "@/components/atoms/Link/Link";
import { SharePostLinks } from "@/components/molecules/SharePostLinks/SharePostLinks";
import { MdxHeading } from "@/components/molecules/MdxHeading/MdxHeading";
import type { MDXComponents } from "mdx/types";

type PostContentProps = {
  source: MDXRemoteSerializeResult;
  slug: string;
  title: string;
};

export const PostContent = ({ source, slug, title }: PostContentProps) => {
  const components = {
    a: Link,
    img: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt}
        sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
      />
    ),
    h2: (props: JSX.IntrinsicElements["h2"]) => (
      <MdxHeading as="h2" isAnchor {...props} />
    ),
    h3: (props: JSX.IntrinsicElements["h3"]) => (
      <MdxHeading as="h3" isAnchor {...props} />
    ),
    h4: (props: JSX.IntrinsicElements["h4"]) => (
      <MdxHeading as="h4" isAnchor {...props} />
    ),
    h5: (props: JSX.IntrinsicElements["h5"]) => (
      <MdxHeading as="h5" isAnchor {...props} />
    ),
  } as MDXComponents;

  return (
    <article className="pb-16">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose dark:prose-invert max-w-none mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-light-green dark:border-zinc-700 flex flex-col lg:flex-row gap-6 items-center">
          <p className="font-bold text-zinc-800 dark:text-zinc-200">
            Udostępnij artykuł
          </p>
          <SharePostLinks slug={slug} title={title} />
        </footer>
      </div>
    </article>
  );
};
