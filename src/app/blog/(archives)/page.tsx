import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { Heading } from "@/components/atoms/Heading/Heading";
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
          <Heading as="h1" id="archive-title" variant="default" size="default">
            Artykuły, ciekawostki z świata stron internetowych i nie tylko 🔥
          </Heading>
        </header>
        <Dropdown
          items={categories}
          activeItem="Wszystkie kategorie"
          defaultItem={{ label: "Wszystkie kategorie", href: "/blog" }}
          label="Kategorie"
        />
      </div>
      <PostsList posts={posts} postItemTitleTag="h2" />
    </>
  );
}
