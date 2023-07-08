import { Link } from "@/components/atoms/Link/Link";
import { getSlug } from "@/utils/getSlug";

type TagListPros = {
  tags: string[];
};

export const TagsList = ({ tags }: TagListPros) => {
  return (
    <ul className={`flex flex-row flex-wrap gap-2 text-sm`}>
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/blog/tag/${getSlug(tag)}`} variant="tag">
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};
