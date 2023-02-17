import { HomePage } from "@/components/templates/HomePage/HomePage";
import { getPublishedPosts } from "@/lib/posts";
import { Post } from "@/types";

export default function Index({ posts }: { posts: Post[] }) {
  return <HomePage posts={posts} />;
}

export const getStaticProps = async () => {
  const posts = await getPublishedPosts();

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
};
