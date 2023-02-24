import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { getCategories, getPostsByCategory } from "@/lib/posts";
import { getSlug } from "@/utils/getSlug";

export default async function TagArchive({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const posts = await getPostsByCategory(slug);
  const categories = await getCategories();
  const fullCategoryName = categories.find((cat) => getSlug(cat) === slug);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
        <header className="w-full lg:w-8/12 flex flex-col gap-3">
          <h1 className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200">
            Kategoria: {fullCategoryName}
          </h1>
        </header>
        <Dropdown
          categories={categories}
          initialDropdownValue={fullCategoryName}
        />
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
