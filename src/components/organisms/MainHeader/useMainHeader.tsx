import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useStickyElement } from "@/hooks/useStickyElement";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { usePathname } from "next/navigation";
import { useOnKeydown } from "@/hooks/useOnKeydown";

export const useMainHeader = () => {
  const [isSticky] = useStickyElement();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuTogglerRef = useRef<HTMLButtonElement>(null);

  const closeMobileMenu = useCallback(() => {
    document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(false);
    if (mobileMenuTogglerRef.current) mobileMenuTogglerRef.current.focus();
  }, []);

  const openMobileMenu = useCallback(() => {
    document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
    setIsMobileMenuOpen(true);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [closeMobileMenu, isMobileMenuOpen, openMobileMenu]);

  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();
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

  useOnKeydown(
    "Escape",
    useCallback(
      () => isMobileMenuOpen && closeMobileMenu(),
      [closeMobileMenu, isMobileMenuOpen],
    ),
  );

  return useMemo(
    () => ({
      isHome,
      isSticky,
      isMobileMenuOpen,
      menuContainerRef,
      toggleMobileMenu,
      mobileMenuTogglerRef,
    }),
    [toggleMobileMenu, isHome, isMobileMenuOpen, isSticky],
  );
};
