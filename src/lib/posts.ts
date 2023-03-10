import path from "path";
import { promises } from "fs";
import { serializeSource } from "./markdown";
import { z } from "zod";
import { Post } from "@/types";
import { getPlaiceholder } from "plaiceholder";
import { getSlug } from "@/utils/getSlug";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

const postsDir = path.join(process.cwd(), "src/content/posts");

export const getAllSlugs = async () => {
  const allFileNames = await promises.readdir(postsDir);
  const onlyMdx = allFileNames.filter(
    (file) => path.extname(file.toLowerCase()) === ".mdx",
  );

  return onlyMdx.map((file) => path.basename(file, ".mdx"));
};

export const getSlugsOfPublishedPosts = async () => {
  const publishedPosts = await getPublishedPosts();

  return publishedPosts.map((post) => post.frontmatter.slug);
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const postPath = path.join(postsDir, `${slug}.mdx`);
  const postSource = await promises.readFile(postPath, "utf-8");
  const mdxSource = await serializeSource(postSource);

  const frontMatterShema = z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    date: z.string().regex(/[1-9]{1}[0-9]{3}[.]{1}[0-9]{2}[.]{1}[0-9]{2}/),
    published: z.boolean(),
    featuredImage: z
      .string()
      .regex(/^\/images\/posts\/.+\/(featured-image)[.]{1}(jpg|png|webp|jpeg)/),
    featuredImageAlt: z.string(),
  });

  const frontmatter = frontMatterShema.parse(mdxSource.frontmatter);
  const { img, base64 } = await getPlaiceholder(frontmatter.featuredImage);

  return {
    frontmatter: {
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      tags: frontmatter.tags,
      date: frontmatter.date,
      published: frontmatter.published,
      featuredImage: {
        ...img,
        alt: frontmatter.featuredImageAlt ? frontmatter.featuredImageAlt : "",
        base64,
      },
      slug,
    },
    source: mdxSource,
  };
};

export const getAllPosts = async () => {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)),
  );
  const postSortedByDate = posts.sort((a, b) => {
    const first = dayjs(a.frontmatter.date, "YYYY.MM.DD");
    const second = dayjs(b.frontmatter.date, "YYYY.MM.DD");

    return first.isBefore(second) ? 1 : -1;
  });

  return postSortedByDate;
};

export const getPublishedPosts = async () => {
  const posts = await getAllPosts();

  return posts.filter((post) => post.frontmatter.published === true);
};

export const getCategories = async () => {
  const posts = await getPublishedPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));

  return Array.from(categories);
};

export const getTags = async () => {
  const posts = await getPublishedPosts();
  const tags = new Set(posts.map((post) => post.frontmatter.tags).flat());

  return Array.from(tags);
};

export const getPostsByTag = async (givenTag: string) => {
  const posts = await getPublishedPosts();
  return posts.filter((post) =>
    post.frontmatter.tags.map((tag) => getSlug(tag)).includes(givenTag),
  );
};

export const getPostsByCategory = async (givenCategory: string) => {
  const posts = await getPublishedPosts();
  return posts.filter(
    (post) => getSlug(post.frontmatter.category) == givenCategory,
  );
};

export const getRelatedPostsByCategory = async (
  currentPostSlug: string,
  category: string,
) => {
  const publishedPosts = await getPublishedPosts();
  const postsWithoutCurrent = publishedPosts.filter(
    (post) => post.frontmatter.slug !== currentPostSlug,
  );
  const postsInGivenCategory = postsWithoutCurrent.filter(
    (post) => post.frontmatter.category === category,
  );

  return postsInGivenCategory;
};

export const getRelatedPostsByTags = async (
  currentPostSlug: string,
  tags: string[],
) => {
  const publishedPosts = await getPublishedPosts();
  const postsWithoutCurrent = publishedPosts.filter(
    (post) => post.frontmatter.slug !== currentPostSlug,
  );
  const postsInGivenTags = postsWithoutCurrent.filter((post) =>
    post.frontmatter.tags.some((tag) => tags.includes(tag)),
  );

  return postsInGivenTags;
};

export const getRelatedPosts = async (
  currentPostSlug: string,
  category: string,
  tags: string[],
  numberOfPostsToReturn = 3,
) => {
  const relatedByCategory = await getRelatedPostsByCategory(
    currentPostSlug,
    category,
  );
  const relatedByTags = await getRelatedPostsByTags(currentPostSlug, tags);

  if (relatedByCategory.length >= numberOfPostsToReturn) {
    return relatedByCategory.slice(0, numberOfPostsToReturn);
  }

  if (
    relatedByCategory.length === 0 &&
    relatedByTags.length >= numberOfPostsToReturn
  ) {
    return relatedByTags.slice(0, numberOfPostsToReturn);
  }

  const concatenated = relatedByCategory.concat(relatedByTags);
  const withoutDuplicates = concatenated.filter(
    (post, index) =>
      !concatenated
        .map((item) => item.frontmatter.slug)
        .includes(post.frontmatter.slug, index + 1),
  );

  if (withoutDuplicates.length >= numberOfPostsToReturn) {
    return withoutDuplicates;
  }

  const publishedPosts = (await getPublishedPosts()).filter(
    (post) => post.frontmatter.slug !== currentPostSlug,
  );
  const publishedPostsWithoutCurrent = publishedPosts.filter(
    (post) =>
      !withoutDuplicates
        .map((item) => item.frontmatter.slug)
        .includes(post.frontmatter.slug),
  );

  return withoutDuplicates
    .concat(publishedPostsWithoutCurrent)
    .slice(0, numberOfPostsToReturn);
};
