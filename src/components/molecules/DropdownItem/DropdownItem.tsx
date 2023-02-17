import { Link } from "@/components/atoms/Link/Link";
import { memo } from "react";
import slugify from "slugify";
import { twMerge } from "tailwind-merge";

type DropdownItemProps = {
  name: string;
  active?: boolean;
  customHref?: string;
};

export const DropdownItem = memo(
  ({ name, active = false, customHref }: DropdownItemProps) => {
    return (
      <li
        className={twMerge(
          "px-6 py-1 transition dark:text-zinc-400",
          active
            ? "text-green-500 dark:text-green-500"
            : "hover:text-green-500 dark:hover:text-white",
        )}
      >
        <Link
          className="block"
          href={
            customHref
              ? customHref
              : `/blog/kategoria/${slugify(name, {
                  replacement: "-",
                  lower: true,
                })}`
          }
        >
          {name}
        </Link>
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";
