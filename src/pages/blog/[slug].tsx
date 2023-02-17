import { getPostBySlug, getSlugsOfPublishedPosts } from "@/lib/posts";
import { Post } from "@/types";

type BlogPostProps = {
  post: Post;
};

const BlogPost = ({ post }: BlogPostProps) => {
  console.log(post.frontmatter);
  return <></>;
};

export const getStaticPaths = async () => {
  const slugs = await getSlugsOfPublishedPosts();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const post = await getPostBySlug(slug);

  return {
    props: {
      post: post,
    },
  };
};

export default BlogPost;