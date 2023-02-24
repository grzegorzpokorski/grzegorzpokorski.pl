import { SinglePost } from "@/components/templates/SinglePost/SinglePost";
import { siteUrl } from "@/content/seo";
import { getPostBySlug, getPostsParams, getRelatedPosts } from "@/lib/posts";
import { getMetadata } from "@/utils/getMetadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(slug);

  return getMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    article: true,
    canonical: `${siteUrl}/blog/${slug}`,
    publicationDate: post.frontmatter.date,
    featuredImage: post.frontmatter.featuredImage.src,
  });
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostsParams();
}

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(slug);
  const relatedPosts = await getRelatedPosts(
    slug,
    post.frontmatter.category,
    post.frontmatter.tags,
  );

  return <SinglePost post={post} relatedPosts={relatedPosts} />;
}
