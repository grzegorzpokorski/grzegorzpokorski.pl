import type { MDXComponents } from "mdx/types";
import type { ImageProps } from "next/image";
import Link from "next/link";
import { MdxHeading } from "@/components/molecules/MdxHeading/MdxHeading";
import Image from "next/image";

export const mdxCustomComponents = {
  a: Link,
  Image: (props: ImageProps) => (
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
