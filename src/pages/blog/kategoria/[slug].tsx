import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Banner } from "@/components/molecules/Banner/Banner";
import { BlogHeader } from "@/components/molecules/BlogHeader/BlogHeader";
import { Layout } from "@/components/templates/Layout/Layout";
import { addressSeparator, siteName } from "@/content/seo";
import { getCategories, getPostsByCategory } from "@/lib/posts";
import { Post } from "@/types";
import slugify from "slugify";

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
    {console.log(posts)}
    {console.log(categories)}
    <Seo
      title={`Blog ${addressSeparator} ${siteName}`}
      description={`Wszystkie artykuły, które pojawiły się na blogu. Przeważa tematyka związana z tworzeniem stron internetowych, ale znajdzie się coś również z mniej technicznych zagadnień.`}
      contentType="website"
    />
    <Layout>
      <Main withMarginOnTop>
        <BlogHeader>
          <div className="w-full lg:w-8/12 flex flex-col gap-3">
            <h1 className="font-bold text-2xl md:text-3xl text-zinc-800">
              Kategoria: {fullCategoryNameToPass}
            </h1>
          </div>
        </BlogHeader>
        <Banner
          title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
          content="Chętnie pomogę zrealizować Twój projekt."
          buttons={
            <>
              <Link href="/kontakt" buttonStyle="white">
                Skontaktuj się ze mną
              </Link>
              <Link href="/oferta" buttonStyle="white-outline">
                Zobacz ofertę
              </Link>
            </>
          }
        />
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

  const fullCategoryNameToPass = categories.filter(
    (cat) => slugify(cat, { replacement: "-", lower: true }) === slug,
  )[0];

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
    params: { slug: slugify(cat, { replacement: "-", lower: true }) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default CategoryArchive;
