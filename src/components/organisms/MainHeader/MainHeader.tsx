"use client";

import { ReactNode } from "react";
import { Logo } from "@/components/molecules/Logo/Logo";
import { Hamburger } from "@/components/atoms/Hamburger/Hamburger";
import { MainMenu } from "../MainMenu/MainMenu";
import { useMainHeader } from "./useMainHeader";

type HeaderProps = {
  children?: ReactNode;
};

export const MainHeader = ({ children }: HeaderProps) => {
  const {
    handleMobileMenu,
    isHome,
    isMobileMenuOpen,
    isSticky,
    menuContainerRef,
  } = useMainHeader();

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full bg-white dark:bg-zinc-800 transition-shadow duration-300 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <section
          className={`container mx-auto px-3 flex flex-row justify-between items-center transition-[height] duration-300 ${
            isSticky ? "h-16 lg:h-20" : "h-20 lg:h-28"
          }`}
        >
          <Logo isHome={isHome} isTitle={isHome} />
          <div ref={menuContainerRef}>
            <Hamburger
              onClick={handleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
            />
            <MainMenu
              closeMobileMenu={handleMobileMenu}
              isMobileMenuOpen={isMobileMenuOpen}
              isSticky={isSticky}
            />
          </div>
        </section>
      </nav>
      {children}
    </header>
  );
};
