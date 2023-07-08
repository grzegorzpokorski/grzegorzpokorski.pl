import { Header } from "@/components/molecules/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Section } from "@/components/molecules/Section/Section";
import type { Post } from "@/types";
import { getSlug } from "@/utils/getSlug";
import { useId } from "react";
import { PostsList } from "@/components/organisms/PostsList/PostsList";

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
  const sectionID = useId();
  const sectionTitleId = `${sectionID}-${getSlug(title)}`;
  return (
    <Section
      id={sectionID}
      ariaLabelledBy={sectionTitleId}
      bgColor={{ light: "light-green", dark: "light-gray" }}
    >
      <Header
        title={title}
        titleId={sectionTitleId}
        subtitle={subtitle}
        className="pb-16 lg:pb-24"
      />
      <PostsList posts={posts} />
      {link && (
        <footer className="mt-12 text-center">
          <Link href="/blog" variant="green">
            Zobacz wszystkie wpisy
          </Link>
        </footer>
      )}
    </Section>
  );
};
