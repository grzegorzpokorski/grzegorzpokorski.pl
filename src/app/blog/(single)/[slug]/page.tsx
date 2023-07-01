import { SinglePostPage } from "@/components/pages/SinglePostPage/SinglePostPage";
import { siteUrl } from "@/content/seo";
import { getPostBySlug, getPostsParams, getRelatedPosts } from "@/lib/posts";
import { getISOStringFromPublicationDate } from "@/utils/getISOStringFromPublicationDate";
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
    featuredImage: {
      ...post.frontmatter.featuredImage,
      type: post.frontmatter.featuredImage.type || "jpeg",
    },
    keywords: post.frontmatter.tags,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    image: [post.frontmatter.featuredImage.src],
    datePublished: getISOStringFromPublicationDate(post.frontmatter.date),
    dateModified: getISOStringFromPublicationDate(post.frontmatter.date),
    author: [
      {
        "@type": "Person",
        name: "Grzegorz Pokorski",
        url: "https://www.linkedin.com/in/grzegorz-pokorski/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SinglePostPage post={post} relatedPosts={relatedPosts.slice(0, 3)} />
    </>
  );
}
