import { Container } from "@/components/atoms/Container/Container";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Dropdown } from "@/components/molecules/Dropdown/Dropdown";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { DefaultBanner } from "@/components/templates/DefaultBanner/DefaultBanner";
import { Layout } from "@/components/templates/Layout/Layout";
import { addressSeparator, siteName } from "@/content/seo";
import { getCategories, getPostsByCategory } from "@/lib/posts";
import { Post } from "@/types";
import { getSlug } from "@/utils/getSlug";

type CategoryArchiveProps = {
  posts: Post[];
  fullCategoryNameToPass: string;
  categories: string[];
};

const CategoryArchive = ({
  fullCategoryNameToPass,
  posts,
  categories,
}: CategoryArchiveProps) => (
  <>
    <Seo
      title={`Blog ${addressSeparator} ${siteName}`}
      description={`Wszystkie artykuły, które pojawiły się na blogu. Przeważa tematyka związana z tworzeniem stron internetowych, ale znajdzie się coś również z mniej technicznych zagadnień.`}
      contentType="website"
    />
    <Layout>
      <Main withMarginOnTop>
        <section className="py-16 lg:py-24 bg-light-green dark:bg-neutral-700">
          <Container>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-16 lg:pb-24">
              <header className="w-full lg:w-8/12 flex flex-col gap-3">
                <h1 className="font-bold text-3xl md:text-4xl text-zinc-800 dark:text-zinc-200">
                  Kategoria: {fullCategoryNameToPass}
                </h1>
              </header>
              <Dropdown
                categories={categories}
                initialDropdownValue={fullCategoryNameToPass}
              />
            </div>
            <PostsList posts={posts} postItemTitleTag="h2" />
          </Container>
        </section>
        <DefaultBanner />
      </Main>
    </Layout>
  </>
);

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const posts = await getPostsByCategory(slug);
  const categories = await getCategories();

  const fullCategoryNameToPass = categories.find(
    (cat) => getSlug(cat) === slug,
  );

  return {
    props: {
      posts,
      categories,
      fullCategoryNameToPass,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((cat) => ({
    params: { slug: getSlug(cat) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default CategoryArchive;
