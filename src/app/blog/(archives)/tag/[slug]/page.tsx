import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { getPostsByTag, getTagsParams } from "@/lib/posts";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";
import { Heading } from "@/components/atoms/Heading/Heading";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { tag } = await getPostsByTag(slug);
  return getMetadata({
    article: false,
    title: `Tag: ${tag}`,
    canonical: `/blog/tag/${slug}`,
  });
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getTagsParams();
}

export default async function TagArchive({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { posts, tag } = await getPostsByTag(slug);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
        <header className="w-full lg:w-8/12 flex flex-col gap-3">
          <Heading as="h1" id="archive-title" variant="default" size="default">
            Tag: {tag}
          </Heading>
        </header>
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
