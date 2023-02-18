import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image, { ImageProps } from "next/image";
import { Link } from "@/components/atoms/Link/Link";
import { SharePostLinks } from "../SharePostLinks/SharePostLinks";
import { Heading } from "../Heading/Heading";

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
      <Heading as="h2" isAnchor {...props} />
    ),
    h3: (props: JSX.IntrinsicElements["h3"]) => (
      <Heading as="h3" isAnchor {...props} />
    ),
    h4: (props: JSX.IntrinsicElements["h4"]) => (
      <Heading as="h4" isAnchor {...props} />
    ),
    h5: (props: JSX.IntrinsicElements["h5"]) => (
      <Heading as="h5" isAnchor {...props} />
    ),
  } as import("mdx/types").MDXComponents;

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
