import { PostItem } from "@/components/molecules/PostItem/PostItem";
import type { Post } from "@/types";

type PostListProps = {
  posts: Post[];
  postItemTitleTag?: "h1" | "h2" | "h3";
};

export const PostsList = ({ posts, postItemTitleTag }: PostListProps) => {
  return (
    <ul
      className="list-none flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6"
      role="list"
    >
      {posts.map((post) => (
        <PostItem
          key={post.frontmatter.slug}
          {...post.frontmatter}
          titleAs={postItemTitleTag}
        />
      ))}
    </ul>
  );
};
