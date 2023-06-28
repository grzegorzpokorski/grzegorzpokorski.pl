import { useState, useCallback, useMemo, useRef } from "react";
import { useOnKeydown } from "@/hooks/useOnKeydown";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  useOnKeydown(
    "Escape",
    useCallback(() => {
      isDropdownOpen && setIsDropdownOpen(false);
    }, [isDropdownOpen]),
  );

  const dropDownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropDownRef, closeDropdown);

  return useMemo(
    () => ({
      dropDownRef,
      isDropdownOpen,
      closeDropdown,
      toggleDropdown,
    }),

    [isDropdownOpen, closeDropdown, toggleDropdown],
  );
};
