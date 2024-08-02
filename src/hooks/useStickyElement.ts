import type { RefObject } from "react";
import { useEffect, useCallback, useRef, useState } from "react";

export const useStickyElement = (
  customOffset?: number,
): [boolean, RefObject<HTMLElement>] => {
  const [isSticky, setStickiness] = useState(false);
  const [positionOnWhichStickinessIsApplied, setPosition] = useState(0);
  const elementToApplyStickiness = useRef<HTMLElement>(null);

  useEffect(() => {
    if (customOffset) {
      setPosition(customOffset);
    } else if (elementToApplyStickiness.current) {
      const bottomOfTheStickyElement =
        elementToApplyStickiness.current.getBoundingClientRect().bottom;
      setPosition(bottomOfTheStickyElement);
    }
  }, [customOffset]);

  const handleScroll = useCallback(() => {
    if (window.scrollY > positionOnWhichStickinessIsApplied) {
      setStickiness(true);
    } else {
      setStickiness(false);
    }
  }, [positionOnWhichStickinessIsApplied]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return [isSticky, elementToApplyStickiness];
};
