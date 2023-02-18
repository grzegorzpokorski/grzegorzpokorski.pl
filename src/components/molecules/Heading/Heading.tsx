import { Link } from "@/components/atoms/Link/Link";
import { getSlug } from "@/utils/getSlug";
import { FaLink } from "react-icons/fa";

type HeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  isAnchor?: boolean;
} & JSX.IntrinsicElements["h1"];

export const Heading = ({
  as: Tag,
  isAnchor,
  children,
  ...props
}: HeadingProps) => {
  if (isAnchor && typeof children === "string") {
    const slug = `${getSlug(children)}`;
    return (
      <Tag
        {...props}
        id={slug}
        className="flex items-start gap-3 relative group"
      >
        <Link
          href={`#${slug}`}
          className="absolute left-0 top-0 -translate-x-full pr-2 pt-1 opacity-0 group-hover:opacity-100 transition-all"
          aria-hidden="true"
          tabIndex={-1}
        >
          <FaLink />
        </Link>
        {children}
      </Tag>
    );
  }
  return <Tag {...props}>{children}</Tag>;
};
