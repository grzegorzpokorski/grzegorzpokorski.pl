import type { RefObject } from "react";
import { useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  action: (event: MouseEvent) => void,
): void => {
  useEffect(() => {
    const handleAction = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        action(event);
      }
    };

    document.addEventListener("mousedown", handleAction);

    return () => {
      document.removeEventListener("mousedown", handleAction);
    };
  }, [ref, action]);
};
