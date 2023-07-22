"use client";

import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label={"Przełącz motyw strony"}
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className={twMerge(
        "flex flex-row items-center justify-center gap-3",
        "bg-zinc-700 dark:bg-green-300 lg:bg-transparent lg:dark:bg-transparent",
        "p-2 lg:p-0 lg:pl-5 mt-4 lg:mt-0",
        "text-gray-100 dark:text-zinc-800 lg:text-zinc-600 lg:dark:text-zinc-200 hover:text-gray-300 lg:hover:text-green-500 lg:dark:hover:text-green-500",
        "transition-colors motion-reduce:transition-none",
        "rounded-lg lg:rounded-none",
        "disabled:cursor-not-allowed",
      )}
      disabled={!mounted}
    >
      {mounted ? (
        <>
          {isDarkMode ? <FaSun /> : <FaMoon />}
          <span className="lg:hidden" aria-hidden="true">
            Zmien motyw na {isDarkMode ? "jasny" : "ciemny"}
          </span>
        </>
      ) : (
        <span className="blur-sm">
          <FaMoon />
          <span className="lg:hidden" aria-hidden="true">
            Zmien motyw strony
          </span>
        </span>
      )}
    </button>
  );
};
