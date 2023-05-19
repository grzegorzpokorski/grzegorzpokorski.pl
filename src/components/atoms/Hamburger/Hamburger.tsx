import { twMerge } from "tailwind-merge";

type HamburgerProps = {
  isMobileMenuOpen: boolean;
  onClick: () => void;
};

export const Hamburger = ({ isMobileMenuOpen, onClick }: HamburgerProps) => {
  const itemStyles =
    "ease h-0.5 w-8 bg-zinc-800 dark:bg-zinc-200 transition duration-300";
  return (
    <button
      id="hamburger"
      className={twMerge(
        "flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden",
      )}
      onClick={onClick}
      type="button"
      aria-label={`${isMobileMenuOpen ? "Zamknij" : "Otwórz"} menu nawigacyjne`}
      aria-expanded={isMobileMenuOpen}
      aria-controls="header-navigation"
    >
      <div
        className={twMerge(
          itemStyles,
          isMobileMenuOpen && "translate-y-2 rotate-45",
        )}
      />
      <div
        className={twMerge(
          itemStyles,
          isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
        )}
      />
      <div
        className={twMerge(
          itemStyles,
          isMobileMenuOpen && "-translate-y-2 -rotate-45",
        )}
      />
    </button>
  );
};
