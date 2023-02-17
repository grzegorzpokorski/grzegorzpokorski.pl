import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Banner } from "@/components/molecules/Banner/Banner";
import { PostContent } from "@/components/molecules/PostContent/PostContent";
import { PostHeader } from "@/components/organisms/PostHeader/PostHeader";
import { PromoPosts } from "@/components/organisms/PromoPosts/PromoPosts";
import { addressSeparator, siteName } from "@/content/seo";
import { Post } from "@/types";
import { Layout } from "../Layout/Layout";

export const SinglePost = ({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) => (
  <>
    <Seo
      title={`${post.frontmatter.title} ${addressSeparator} ${siteName}`}
      description={post.frontmatter.excerpt}
      contentType="article"
      publicationDate={post.frontmatter.date}
      featuredImage={post.frontmatter.featuredImage.src}
    />
    <Layout>
      <Main withMarginOnTop>
        <article>
          <PostHeader {...post.frontmatter} />
          <PostContent
            source={post.source}
            slug={post.frontmatter.slug}
            title={post.frontmatter.title}
          />
        </article>
        <PromoPosts
          title="Mogą Cię zainteresować:"
          subtitle="Posty o podobnej tematyce"
          posts={relatedPosts}
          link
        />
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
