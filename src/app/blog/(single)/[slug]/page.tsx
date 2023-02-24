import { SinglePost } from "@/components/templates/SinglePost/SinglePost";
import { getPostBySlug, getPostsParams, getRelatedPosts } from "@/lib/posts";

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
