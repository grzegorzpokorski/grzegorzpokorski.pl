import Link from "next/link";
import { getSlug } from "@/utils/getSlug";
import type { JSX } from "react";

type MdxHeadingProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  isAnchor?: boolean;
} & JSX.IntrinsicElements["h1"];

export const MdxHeading = ({
  as: Tag,
  isAnchor,
  children,
  ...props
}: MdxHeadingProps) => {
  if (isAnchor && typeof children === "string") {
    const slug = `${getSlug(children)}`;
    return (
      <Tag {...props} id={slug} className="flex gap-3 relative ml-5 lg:ml-0">
        <Link
          href={`#${slug}`}
          className="absolute left-0 top-0 -translate-x-full pr-2 transition-all motion-reduce:transition-none text-neutral-300 dark:text-neutral-600 hover:text-green-500 dark:hover:text-green-500"
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
