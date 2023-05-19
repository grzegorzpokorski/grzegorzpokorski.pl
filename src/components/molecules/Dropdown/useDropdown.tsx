import { useState, useCallback, useMemo } from "react";
import { useOnKeydown } from "@/hooks/useOnKeydown";

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

  return useMemo(
    () => ({
      isDropdownOpen,
      closeDropdown,
      toggleDropdown,
    }),

    [isDropdownOpen, closeDropdown, toggleDropdown],
  );
};
