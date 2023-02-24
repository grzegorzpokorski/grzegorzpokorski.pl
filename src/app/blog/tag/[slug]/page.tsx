import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { getPostsByTag, getTags } from "@/lib/posts";
import { getSlug } from "@/utils/getSlug";

export default async function TagArchive({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = await getPostsByTag(slug);
  const tags = await getTags();
  const fullTagName = tags.find((tag) => getSlug(tag) === slug);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
        <header className="w-full lg:w-8/12 flex flex-col gap-3">
          <h1 className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200">
            Tag: {fullTagName}
          </h1>
        </header>
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
