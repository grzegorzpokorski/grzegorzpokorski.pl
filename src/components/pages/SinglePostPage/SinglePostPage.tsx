import { PostContent } from "@/components/molecules/PostContent/PostContent";
import { PostHeader } from "@/components/organisms/PostHeader/PostHeader";
import { PromoPosts } from "@/components/organisms/PromoPosts/PromoPosts";
import type { Post } from "@/types";

export const SinglePostPage = ({
  post,
  relatedPosts,
}: {
  post: Post;
  relatedPosts: Post[];
}) => (
  <>
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
  </>
);
