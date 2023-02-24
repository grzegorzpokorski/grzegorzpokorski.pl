import { HomePage } from "@/components/templates/HomePage/HomePage";
import { getPublishedPosts } from "@/lib/posts";

export default async function Index() {
  const posts = await getPublishedPosts();
  return <HomePage posts={posts.slice(0, 3)} />;
}
