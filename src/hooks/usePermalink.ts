import { siteUrl } from "@/content/seo";
import { useRouter } from "next/router";

export const usePermalink = () => {
  const router = useRouter();
  const { asPath: path } = router;

  if (path === "/") {
    return siteUrl;
  } else {
    return `${siteUrl}${path}`;
  }
};
