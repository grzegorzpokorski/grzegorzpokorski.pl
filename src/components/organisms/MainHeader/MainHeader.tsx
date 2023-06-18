"use client";

import { ReactNode } from "react";
import { Logo } from "@/components/molecules/Logo/Logo";
import { Hamburger } from "@/components/atoms/Hamburger/Hamburger";
import { MainMenu } from "../MainMenu/MainMenu";
import { useMainHeader } from "./useMainHeader";
import { twMerge } from "tailwind-merge";
import FocusLock from "react-focus-lock";
import { useIsAboveBreakpoint } from "@/hooks/useIsAboveBreakpoint";

type HeaderProps = {
  children?: ReactNode;
};

export const MainHeader = ({ children }: HeaderProps) => {
  const {
    toggleMobileMenu,
    isHome,
    isMobileMenuOpen,
    isSticky,
    menuContainerRef,
    mobileMenuTogglerRef,
  } = useMainHeader();
  const isAboveBreakpoint = useIsAboveBreakpoint({ breakpoint: 960 });

  return (
    <header>
      <nav
        className={twMerge(
          "fixed top-0 z-50 w-full bg-white dark:bg-zinc-800",
          "transition-shadow duration-300 motion-reduce:transition-none",
          isSticky && "shadow-md",
        )}
      >
        <section
          className={twMerge(
            "container mx-auto px-3 flex flex-row justify-between items-center",
            "transition-[height] duration-300 motion-reduce:transition-none",
            isSticky ? "h-16 lg:h-20" : "h-20 lg:h-28",
          )}
        >
          <Logo isHome={isHome} isTitle={isHome} />
          <FocusLock
            as="div"
            disabled={!isMobileMenuOpen || isAboveBreakpoint}
            ref={menuContainerRef}
            returnFocus
          >
            <Hamburger
              onClick={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              ref={mobileMenuTogglerRef}
            />
            <MainMenu
              closeMobileMenu={toggleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              isSticky={isSticky}
            />
          </FocusLock>
        </section>
      </nav>
      {children}
    </header>
  );
};
