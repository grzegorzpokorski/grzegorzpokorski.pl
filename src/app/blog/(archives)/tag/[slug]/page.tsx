import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { getPostsByTag, getTagsParams } from "@/lib/posts";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { tag, canonical } = await getPostsByTag(slug);
  return getMetadata({
    article: false,
    title: `Tag: ${tag}`,
    canonical,
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
          <h1
            className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200"
            id="archive-title"
          >
            Tag: {tag}
          </h1>
        </header>
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
