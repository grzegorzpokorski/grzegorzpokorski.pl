import { Header } from "@/components/atoms/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Section } from "@/components/molecules/Section/Section";
import { Post } from "@/types";
import { getSlug } from "@/utils/getSlug";
import { PostsList } from "../PostsList/PostsList";

type PromoPostsProps = {
  subtitle?: string;
  title: string;
  posts: Post[];
  link?: boolean;
};

export const PromoPosts = ({
  subtitle,
  title,
  posts,
  link,
}: PromoPostsProps) => {
  return (
    <Section
      id={getSlug(title)}
      ariaLabelledBy={getSlug(title)}
      bgColor={{ light: "light-green", dark: "light-gray" }}
    >
      <Header
        title={title}
        titleId={getSlug(title)}
        subtitle={subtitle}
        className="pb-16 lg:pb-24"
      />
      <PostsList posts={posts} />
      {link && (
        <footer className="mt-12 text-center">
          <Link href="/blog" buttonStyle="green">
            Zobacz wszystkie wpisy
          </Link>
        </footer>
      )}
    </Section>
  );
};
