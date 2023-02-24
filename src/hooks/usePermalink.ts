"use client";

import { siteUrl } from "@/content/seo";
import { usePathname } from "next/navigation";

export const usePermalink = () => {
  const path = usePathname();

  if (path === "/") {
    return siteUrl;
  } else {
    return `${siteUrl}${path}`;
  }
};
