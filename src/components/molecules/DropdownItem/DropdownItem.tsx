import { Link } from "@/components/atoms/Link/Link";
import { memo } from "react";
import slugify from "slugify";
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
          onClick={onClick}
        >
          {name}
        </Link>
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";
