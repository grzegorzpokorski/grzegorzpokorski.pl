import { SharePostLinks } from "@/components/molecules/SharePostLinks/SharePostLinks";
import type { Post } from "@/types";

type PostContentProps = {
  compiledSource: Post["compiledSource"];
  slug: string;
  title: string;
};

export const PostContent = ({
  compiledSource,
  slug,
  title,
}: PostContentProps) => {
  return (
    <article className="pb-16">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose dark:prose-invert max-w-none mx-auto">
          {compiledSource}
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-light-green dark:border-zinc-700 flex flex-col lg:flex-row gap-6 items-center">
          <p className="font-bold text-zinc-800 dark:text-zinc-200">
            Udostępnij artykuł
          </p>
          <SharePostLinks slug={slug} title={title} />
        </footer>
      </div>
    </article>
  );
};
