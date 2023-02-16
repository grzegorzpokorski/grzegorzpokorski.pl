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
  };
  slug: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
  source: string;
};
