import { siteUrl } from "@/content/seo";
import {
  getCategoriesParams,
  getPublishedPosts,
  getTagsParams,
} from "@/lib/posts";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/blog", "/kontakt", "/o-mnie", "/oferta"];
  const routesMap = [
    ...routes.map((item) => ({
      url: `${siteUrl}${item}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  const posts = await getPublishedPosts();
  const postsMap = [
    ...posts.map((item) => ({
      url: `${siteUrl}/blog/${item.frontmatter.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  const tags = await getTagsParams();
  const tagsMap = [
    ...tags.map((item) => ({
      url: `${siteUrl}/blog/tag/${item.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  const categories = await getCategoriesParams();
  const categoriesMap = [
    ...categories.map((item) => ({
      url: `${siteUrl}/blog/kategoria/${item.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  return [...routesMap, ...postsMap, ...tagsMap, ...categoriesMap];
}
