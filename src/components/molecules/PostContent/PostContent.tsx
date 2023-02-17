import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image, { ImageProps } from "next/image";
import { Link } from "@/components/atoms/Link/Link";

type PostContentProps = {
  source: MDXRemoteSerializeResult;
  slug: string;
  title: string;
};

export const PostContent = ({ source, slug, title }: PostContentProps) => {
  const components = {
    img: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt}
        sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
      />
    ),
    a: Link,
  };

  return (
    <article className="pb-16">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose max-w-none mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-greenWhite flex flex-col lg:flex-row gap-6 items-center">
          <p className="font-bold text-zinc-800">Udostępnij artykuł</p>
          {/* <SharePostLinks slug={slug} title={title} /> */}
        </footer>
      </div>
    </article>
  );
};
