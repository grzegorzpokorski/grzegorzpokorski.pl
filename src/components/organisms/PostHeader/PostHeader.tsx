import slugify from "slugify";
import { PostFrontmatter } from "@/types";
import { Link } from "@/components/atoms/Link/Link";
import Image from "next/image";
import { TagsList } from "@/components/molecules/TagsList/TagsList";
import { getISOStringFromPublicationDate } from "@/utils/getISOStringFromPublicationDate";
import { getFormatedPublicationDate } from "@/utils/getFormatedPublicationDate";

export const PostHeader = ({
  category,
  date,
  title,
  tags,
  featuredImage,
}: PostFrontmatter) => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12 dark:text-zinc-200">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-8/12 mx-auto flex flex-col gap-4">
          <span className="flex flex-row items-center gap-3">
            <Link
              href={`/blog/kategoria/${slugify(category, {
                replacement: "-",
                lower: true,
              })}`}
              className="text-green-500 hover:underline"
            >
              {category}
            </Link>
            <span
              className="inline-block w-12 h-0.5 bg-zinc-800 dark:bg-zinc-200"
              aria-hidden="true"
            ></span>
            <time dateTime={getISOStringFromPublicationDate(date)}>
              {getFormatedPublicationDate(date)}
            </time>
          </span>
          <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
          <TagsList tags={tags} />
          <figure className="w-full h-60 md:h-80 lg:h-[30rem] overflow-hidden relative block mt-4 rounded-md shadow-md">
            <Image
              src={featuredImage}
              width={featuredImage.width}
              height={featuredImage.height}
              alt={featuredImage.alt}
              className="object-cover object-center w-full h-full"
              sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
              priority
            />
          </figure>
        </div>
      </div>
    </header>
  );
};
