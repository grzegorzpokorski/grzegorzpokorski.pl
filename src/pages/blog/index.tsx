import { Container } from "@/components/atoms/Container/Container";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Banner } from "@/components/molecules/Banner/Banner";
import { PostsList } from "@/components/organisms/PostsList/PostsList";
import { Layout } from "@/components/templates/Layout/Layout";
import { addressSeparator, siteName } from "@/content/seo";
import { getCategories, getPublishedPosts } from "@/lib/posts";
import { Post } from "@/types";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPublishedPosts();
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories,
    },
  };
};

type BlogProps = {
  posts: Post[];
  categories: string[];
};

const Blog = ({ posts, categories }: BlogProps) => (
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
                  Artykuły, ciekawostki z świata stron internetowych i nie tylko
                  🔥
                </h1>
              </header>
            </div>
            <PostsList posts={posts} postItemTitleTag="h2" />
          </Container>
        </section>
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

export default Blog;
