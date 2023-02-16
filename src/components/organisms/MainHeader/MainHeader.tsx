import { ReactNode, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useStickyElement } from "@/hooks/useStickyElement";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Logo } from "@/components/molecules/Logo/Logo";
import { Hamburger } from "@/components/atoms/Hamburger/Hamburger";
import { MainMenu } from "../MainMenu/MainMenu";

type HeaderProps = {
  children?: ReactNode;
};

export const MainHeader = ({ children }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(false);
  };
  const openMobileMenu = () => {
    document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(true);
  };
  const handleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const [isSticky] = useStickyElement();

  const [isHome, setIsHome] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  const menuContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(
    menuContainerRef,
    () => isMobileMenuOpen && closeMobileMenu(),
  );

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full bg-white transition-shadow duration-300 ${
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
