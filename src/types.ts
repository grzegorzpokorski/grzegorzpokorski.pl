import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  published: boolean;
  featuredImage: {
    src: string;
    height: number;
    width: number;
    alt: string;
    type?: string;
    base64?: string;
  };
  slug: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  source: MDXRemoteSerializeResult;
};
