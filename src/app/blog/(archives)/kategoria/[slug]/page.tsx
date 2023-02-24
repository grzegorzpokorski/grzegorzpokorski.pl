import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import {
  getCategories,
  getCategoriesParams,
  getPostsByCategory,
} from "@/lib/posts";

import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { category, canonical } = await getPostsByCategory(slug);
  return getMetadata({
    article: false,
    title: `Kategoria: ${category}`,
    canonical,
  });
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategoriesParams();
}

export default async function TagArchive({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { posts, category } = await getPostsByCategory(slug);
  const categories = await getCategories();

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
        <header className="w-full lg:w-8/12 flex flex-col gap-3">
          <h1 className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200">
            Kategoria: {category}
          </h1>
        </header>
        <Dropdown categories={categories} initialDropdownValue={category} />
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
