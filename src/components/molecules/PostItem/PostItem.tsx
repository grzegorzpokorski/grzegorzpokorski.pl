import Image from "next/image";
import { FaCalendarDay, FaTag } from "react-icons/fa";
import Link from "next/link";
import { PostFrontmatter } from "@/types";
import { getSlug } from "@/utils/getSlug";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

type PostItemPops = PostFrontmatter & {
  titleAs?: "h1" | "h2" | "h3";
};

export const PostItem = ({
  slug,
  featuredImage,
  category,
  date,
  title,
  excerpt,
  titleAs: TitleTag = "h3",
}: PostItemPops) => {
  return (
    <li className="bg-white dark:bg-zinc-800 drop-shadow-xl border-2 border-light-green dark:border-zinc-600 rounded-md">
      <article>
        <Link href={`/blog/${slug}`} aria-hidden={true} tabIndex={-1}>
          <figure className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
            <Image
              src={featuredImage}
              className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-300"
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
              alt={featuredImage.alt}
              placeholder="blur"
              blurDataURL={featuredImage.base64}
            />
          </figure>
        </Link>
        <header className="p-8 pb-0 flex flex-col gap-3 dark:text-zinc-200">
          <div className="flex flex-row gap-4 text-sm">
            <Link
              href={`/blog/kategoria/${getSlug(category)}`}
              className="hover:underline flex flex-row items-center"
            >
              <FaTag className="mr-2 text-green-500" />
              {category}
            </Link>
            <time
              dateTime={dayjs(date, "YYYY.MM.DD").format("YYYY-MM-DD")}
              className="flex flex-row items-center"
            >
              <FaCalendarDay className="mr-2 text-green-500" />
              {dayjs(date, "YYYY.MM.DD").format("DD MMMM YYYY")}
            </time>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="text-zinc-800 dark:text-zinc-200 hover:text-green-500 dark:hover:text-green-500 transition"
          >
            <TitleTag className="font-bold text-lg">{title}</TitleTag>
          </Link>
        </header>
        <div className="p-8 pt-3 flex flex-col gap-3 dark:text-zinc-400">
          <p>{excerpt}</p>
          {/* <p>{post.excerpt.split(" ").splice(0, 20).join(" ")} [...]</p> */}
        </div>
      </article>
    </li>
  );
};
