import type { ReactNode } from "react";

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
    base64: string;
    type?: string;
  };
  slug: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  compiledSource: ReactNode;
};
