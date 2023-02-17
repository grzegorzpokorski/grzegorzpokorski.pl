import { PostItem } from "@/components/molecules/PostItem/PostItem";
import { Post } from "@/types";

type PostListProps = {
  posts: Post[];
  postItemTitleTag?: "h1" | "h2" | "h3";
};

export const PostsList = ({ posts, postItemTitleTag }: PostListProps) => {
  return (
    <ul className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
