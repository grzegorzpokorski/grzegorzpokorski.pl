import { useThemeContext } from "@/providers/ThemeProvider";
import { FaMoon, FaSun } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export const ThemeSwitch = () => {
  const { theme, changeTheme } = useThemeContext();
  const isDarkMode = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`${isDarkMode ? "Wyłącz" : "Włącz"} ciemny motyw`}
      onClick={() => changeTheme(isDarkMode ? "light" : "dark")}
      className={twMerge(
        "flex flex-row items-center justify-center gap-3",
        "bg-zinc-700 dark:bg-green-300 lg:bg-transparent lg:dark:bg-transparent",
        "p-2 lg:p-0 lg:pl-5 mt-4 lg:mt-0",
        "text-gray-100 dark:text-zinc-800 lg:text-zinc-600 lg:dark:text-zinc-200 hover:text-gray-300 lg:hover:text-green-500 lg:dark:hover:text-green-500",
        "transition-colors motion-reduce:transition-none",
        "rounded-lg lg:rounded-none",
      )}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
      <span className="lg:hidden" aria-hidden="true">
        Zmien motyw na {isDarkMode ? "jasny" : "ciemny"}
      </span>
    </button>
  );
};
