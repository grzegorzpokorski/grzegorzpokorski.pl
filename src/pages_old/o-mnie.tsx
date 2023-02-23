import { AboutPage } from "@/components/templates/AboutPage/AboutPage";
import { getPublishedPosts } from "@/lib/posts";
import { Post } from "@/types";

export const getStaticProps = async () => {
  const posts = await getPublishedPosts();
  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
};

export default function About({ posts }: { posts: Post[] }) {
  return <AboutPage posts={posts} />;
}
