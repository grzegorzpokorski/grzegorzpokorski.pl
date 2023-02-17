import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { PostContent } from "@/components/molecules/PostContent/PostContent";
import { PostHeader } from "@/components/organisms/PostHeader/PostHeader";
import { addressSeparator, siteName } from "@/content/seo";
import { Post } from "@/types";
import { Layout } from "../Layout/Layout";

export const SinglePost = ({ post }: { post: Post }) => (
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
      </Main>
    </Layout>
  </>
);
