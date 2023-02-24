import { AboutPage } from "@/components/templates/AboutPage/AboutPage";
import { getPublishedPosts } from "@/lib/posts";

export default async function About() {
  const posts = await getPublishedPosts();
  return <AboutPage posts={posts.slice(0, 3)} />;
}
