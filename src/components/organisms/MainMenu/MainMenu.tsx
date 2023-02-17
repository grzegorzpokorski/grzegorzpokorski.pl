import { Link } from "@/components/atoms/Link/Link";
import { useRouter } from "next/router";
import { menuItems } from "@/content/menu";
import { SocialMenu } from "@/components/molecules/SocialMenu/SocialMenu";
import { twMerge } from "tailwind-merge";
import { ThemeSwitch } from "@/components/atoms/ThemeSwitch/ThemeShitch";

type MainMenuProps = {
  isMobileMenuOpen: boolean;
  isSticky: boolean;
  closeMobileMenu: () => void;
};

export const MainMenu = ({
  isMobileMenuOpen,
  isSticky,
  closeMobileMenu,
}: MainMenuProps) => {
  const currentPath = useRouter().asPath.split("#")[0];

  return (
    <div
      id="menu"
      className={twMerge(
        "fixed lg:relative right-0 bottom-0 z-10 max-w-xs lg:max-w-none w-full lg:w-auto p-8 lg:p-0 flex flex-col lg:flex-row gap-6 lg:items-center overflow-y-auto lg:overflow-y-visible bg-zinc-800 dark:bg-green-500 lg:dark:bg-transparent lg:bg-transparent shadow-md lg:shadow-none transition duration-300 ease-in-out lg:divide-x-2 divide-green-500",
        isMobileMenuOpen
          ? "translate-x-0 lg:translate-x-0"
          : "translate-x-full lg:translate-x-0",
        isSticky ? "top-16 lg:top-0" : "top-20 lg:top-0",
      )}
    >
      <ul className="flex flex-col lg:flex-row gap-6 list-none" role="list">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={twMerge(
                "transition-all",
                item.href === currentPath
                  ? "text-green-500 dark:text-zinc-200 lg:dark:text-green-500"
                  : "text-gray-100 dark:text-zinc-800 lg:text-zinc-600 lg:dark:text-zinc-200 hover:text-gray-300 lg:hover:text-green-500 lg:dark:hover:text-green-500",
              )}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <SocialMenu className="text-white dark:text-zinc-800 lg:text-zinc-800 lg:dark:text-zinc-200 pt-4 lg:pt-0 lg:pl-6" />
      <ThemeSwitch />
    </div>
  );
};
