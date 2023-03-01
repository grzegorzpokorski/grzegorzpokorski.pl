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
    <Section id={getSlug(title)} className="bg-light-green dark:bg-neutral-700">
      <Header title={title} subtitle={subtitle} className="pb-16 lg:pb-24" />
      <PostsList posts={posts} />
      {link && (
        <footer className="mt-12 text-center">
          <Link href="/blog" buttonStyle="green" className="inline-flex">
            Zobacz wszystkie wpisy
          </Link>
        </footer>
      )}
    </Section>
  );
};
