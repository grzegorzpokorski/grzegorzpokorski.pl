"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { DropdownItem } from "../DropdownItem/DropdownItem";
import { useDropdown } from "./useDropdown";

type Props = {
  categories: string[];
  initialDropdownValue?: string;
};

export const Dropdown = ({
  categories,
  initialDropdownValue = "Wszystkie kategorie",
}: Props) => {
  const { isDropdownOpen, closeDropdown, toggleDropdown } = useDropdown();
  const dropDownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropDownRef, closeDropdown);

  return (
    <div className="w-full lg:w-4/12">
      <div
        className="relative flex flex-col text-left w-full shadow-md"
        ref={dropDownRef}
      >
        <button
          className={twMerge(
            "h-12 lg:h-16 px-6 border-2 border-zinc-400 hover:border-green-500 bg-white dark:bg-zinc-800 rounded text-left text-zinc-600 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-500 relative transition-colors",
            "after:content-[''] after:right-6 after:top-1/2 after:-translate-y-1/2 after:absolute after:border-l-[6px] after:border-l-transparent after:border-t-[6px] after:border-t-zinc-500 after:border-r-[6px] after:border-r-transparent after:transition-all",
            isDropdownOpen &&
              "border-green-500 text-green-500 after:rotate-180 after:border-y-green-500",
            "motion-reduce:transition-none after:motion-reduce:transition-none",
          )}
          type="button"
          id="dropdownMenuButton"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {initialDropdownValue}
        </button>
        <ul
          className={twMerge(
            "flex flex-col py-2 lg:py-4 bg-white dark:bg-zinc-800 shadow-md z-10 rounded absolute top-0 left-0 right-0 translate-y-12 lg:translate-y-16 hidden",
            isDropdownOpen && "block",
          )}
          aria-labelledby="dropdownMenuButton"
        >
          {
            <DropdownItem
              key="wszystkie-kategorie"
              name="Wszystkie kategorie"
              active={initialDropdownValue === "Wszystkie kategorie"}
              customHref="/blog"
              onClick={() => closeDropdown()}
            />
          }
          {categories &&
            categories.map((category) => (
              <DropdownItem
                key={category}
                name={category}
                active={category === initialDropdownValue ? true : false}
                onClick={() => closeDropdown()}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
