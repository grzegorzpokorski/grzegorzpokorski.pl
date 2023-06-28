"use client";

import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { DropdownItem } from "@/components/molecules/DropdownItem/DropdownItem";
import { useDropdown } from "./useDropdown";
import FocusLock from "react-focus-lock";

type Props = {
  items: string[];
  activeItem: string;
  defaultItem: {
    label: string;
    href: string;
  };
  label: string;
};

export const Dropdown = ({ items, activeItem, defaultItem, label }: Props) => {
  const { dropDownRef, isDropdownOpen, closeDropdown, toggleDropdown } =
    useDropdown();
  const id = useId();

  return (
    <div className="w-full lg:w-4/12">
      <div
        className="relative flex flex-col text-left w-full shadow-md"
        ref={dropDownRef}
      >
        <button
          className={twMerge(
            "relative py-4 px-6 border-2 border-zinc-400 hover:border-green-500 bg-white dark:bg-zinc-800 rounded text-left text-zinc-600 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-500 relative transition-colors",
            "after:content-[''] after:right-6 after:top-1/2 after:-translate-y-1/2 after:absolute after:border-l-[6px] after:border-l-transparent after:border-t-[6px] after:border-t-zinc-500 after:border-r-[6px] after:border-r-transparent after:transition-all",
            isDropdownOpen &&
              "border-green-500 text-green-500 after:rotate-180 after:border-y-green-500",
            "motion-reduce:transition-none after:motion-reduce:transition-none",
          )}
          type="button"
          id={id}
          role="combobox"
          aria-expanded={isDropdownOpen}
          aria-controls={`${id}-controls`}
          aria-haspopup="true"
          aria-label={label}
          aria-autocomplete="none"
          onClick={toggleDropdown}
        >
          {activeItem}
        </button>
        <FocusLock disabled={!isDropdownOpen}>
          <ul
            className={twMerge(
              "absolute bottom-0 translate-y-full flex flex-col py-2 lg:py-4 bg-white dark:bg-zinc-800 shadow-md z-10 rounded w-full hidden",
              isDropdownOpen && "block",
            )}
            id={`${id}-controls`}
            aria-labelledby="dropdownMenuButton"
            role="listbox"
          >
            {
              <DropdownItem
                key={defaultItem.label}
                name={defaultItem.label}
                active={defaultItem.label === activeItem}
                customHref={defaultItem.href}
                onClick={() => closeDropdown()}
              />
            }
            {items &&
              items.map((item) => (
                <DropdownItem
                  key={item}
                  name={item}
                  active={item === activeItem}
                  onClick={() => closeDropdown()}
                />
              ))}
          </ul>
        </FocusLock>
      </div>
    </div>
  );
};
