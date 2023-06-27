import { AboutPage } from "@/components/pages/AboutPage/AboutPage";
import { getPublishedPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";
import { siteUrl } from "@/content/seo";

export function generateMetadata(): Metadata {
  return getMetadata({
    article: false,
    title: "O mnie",
    canonical: `${siteUrl}/o-mnie`,
  });
}

export default async function About() {
  const posts = await getPublishedPosts();
  return <AboutPage posts={posts.slice(0, 3)} />;
}
