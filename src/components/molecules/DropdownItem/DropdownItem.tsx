import { Link } from "@/components/atoms/Link/Link";
import { getSlug } from "@/utils/getSlug";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

type DropdownItemProps = {
  name: string;
  active?: boolean;
  customHref?: string;
  onClick?: () => void;
};

export const DropdownItem = memo(
  ({ name, active = false, customHref, onClick }: DropdownItemProps) => {
    return (
      <li
        className={twMerge(
          "flex flex-col",
          "px-6 py-1.5 transition dark:text-zinc-400",
          "motion-reduce:transition-none",
          active
            ? "text-green-500 dark:text-green-500"
            : "hover:text-green-500 dark:hover:text-white",
        )}
        role="option"
        aria-selected={active}
      >
        <Link
          href={customHref ? customHref : `/blog/kategoria/${getSlug(name)}`}
          onClick={onClick}
        >
          {name}
        </Link>
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";
