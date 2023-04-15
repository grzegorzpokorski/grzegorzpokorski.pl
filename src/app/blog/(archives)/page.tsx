import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { getCategories, getPublishedPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";
import { siteUrl } from "@/content/seo";

export function generateMetadata(): Metadata {
  return getMetadata({
    article: false,
    title: "Blog",
    canonical: `${siteUrl}/blog`,
  });
}
export default async function Blog() {
  const categories = await getCategories();
  const posts = await getPublishedPosts();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
        <header className="w-full lg:w-8/12 flex flex-col gap-3">
          <h1
            className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200"
            id="archive-title"
          >
            Artykuły, ciekawostki z świata stron internetowych i nie tylko 🔥
          </h1>
        </header>
        <Dropdown
          categories={categories}
          initialDropdownValue="Wszystkie kategorie"
        />
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
