import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "rehype-prism-plus";
import rehypeImgSize from "rehype-img-size";

export const serializeSource = (mdx: string) =>
  serialize(mdx, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypePrism, [rehypeImgSize, { dir: "public" }]],
    },
  });
