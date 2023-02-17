import { Link } from "@/components/atoms/Link/Link";
import slugify from "slugify";

type TagListPros = {
  tags: string[];
};

export const TagsList = ({ tags }: TagListPros) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-2 text-sm`}>
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={`/blog/tag/${slugify(tag, {
              replacement: "-",
              lower: true,
            })}`}
            buttonStyle="tag"
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
