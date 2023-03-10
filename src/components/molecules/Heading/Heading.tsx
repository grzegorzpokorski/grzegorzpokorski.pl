import { Link } from "@/components/atoms/Link/Link";
import { getSlug } from "@/utils/getSlug";

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
      <Tag {...props} id={slug} className="flex gap-3 relative ml-5 lg:ml-0">
        <Link
          href={`#${slug}`}
          className="absolute left-0 top-0 -translate-x-full pr-2 transition-all text-neutral-300 dark:text-neutral-600 hover:text-green-500 dark:hover:text-green-500"
          aria-hidden="true"
          tabIndex={-1}
        >
          #
        </Link>
        {children}
      </Tag>
    );
  }
  return <Tag {...props}>{children}</Tag>;
};
