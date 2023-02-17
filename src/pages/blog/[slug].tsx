import { SinglePost } from "@/components/templates/SinglePost/SinglePost";
import {
  getPostBySlug,
  getRelatedPosts,
  getSlugsOfPublishedPosts,
} from "@/lib/posts";
import { Post } from "@/types";

type BlogPostProps = {
  post: Post;
  relatedPosts: Post[];
};

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => (
  <SinglePost post={post} relatedPosts={relatedPosts} />
);

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
  const relatedPosts = await getRelatedPosts(
    slug,
    post.frontmatter.category,
    post.frontmatter.tags,
  );

  return {
    props: {
      post: post,
      relatedPosts: relatedPosts,
    },
  };
};

export default BlogPost;
