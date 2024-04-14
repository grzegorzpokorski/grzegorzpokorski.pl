import path from "path";
import * as fs from "node:fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import { z } from "zod";
import type { Post } from "@/types";
import { getPlaiceholder } from "plaiceholder";
import { getSlug } from "@/utils/getSlug";
import { getISODateFromPublicatedDate } from "@/utils/getISODateFromPublicationDate";
import rehypePrism from "rehype-prism-plus";
import { mdxCustomComponents } from "@/lib/mdxCustomComponents";

const postsDir = path.join(process.cwd(), "posts");

export const getAllSlugs = async () => {
  const allFileNames = await fs.readdir(postsDir);
  const onlyMdx = allFileNames.filter(
    (file) => path.extname(file.toLowerCase()) === ".mdx",
  );

  return onlyMdx.map((file) => path.basename(file, ".mdx"));
};

export const getSlugsOfPublishedPosts = async () => {
  const publishedPosts = await getPublishedPosts();

  return publishedPosts.map((post) => post.frontmatter.slug);
};

const getFrontmatterFeaturedImage = async (src: string) => {
  const buffer = await fs.readFile(path.join("./public", src));
  const plaiceholder = await getPlaiceholder(buffer, { size: 10 });

  return plaiceholder;
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const postPath = path.join(postsDir, `${slug}.mdx`);
  const postSource = await fs.readFile(postPath, "utf-8");
  const compiled = await compileMDX({
    source: postSource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrism],
      },
    },
    components: mdxCustomComponents,
  });

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

  const frontmatter = frontMatterShema.parse(compiled.frontmatter);
  const plaiceholder = await getFrontmatterFeaturedImage(
    frontmatter.featuredImage,
  );

  return {
    frontmatter: {
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      tags: frontmatter.tags,
      date: frontmatter.date,
      published: frontmatter.published,
      featuredImage: {
        src: frontmatter.featuredImage,
        alt: frontmatter.featuredImageAlt,
        width: plaiceholder.metadata.width,
        height: plaiceholder.metadata.height,
        type: plaiceholder.metadata.format,
        base64: plaiceholder.base64,
      },
      slug,
    },
    compiledSource: compiled.content,
  };
};

export const getAllPosts = async () => {
  const slugs = await getAllSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)),
  );
  const postSortedByDate = posts.sort((a, b) => {
    const first = getISODateFromPublicatedDate(a.frontmatter.date);
    const second = getISODateFromPublicatedDate(b.frontmatter.date);

    return first < second ? 1 : -1;
  });

  return postSortedByDate;
};

export const getPublishedPosts = async () => {
  const posts = await getAllPosts();

  return posts.filter((post) => post.frontmatter.published === true);
};

export const getPostsParams = async () => {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.frontmatter.slug }));
};

export const getTags = async () => {
  const posts = await getPublishedPosts();
  const tags = new Set(posts.map((post) => post.frontmatter.tags).flat());

  return Array.from(tags);
};

export const getTagsParams = async () => {
  const tags = await getTags();

  return tags.map((tag) => ({ slug: getSlug(tag) }));
};

export const getTagBySlug = async (slug: string) => {
  const tags = await getTags();
  const fullTagName = tags.find((tag) => getSlug(tag) === slug);

  return fullTagName ? fullTagName : slug;
};

export const getPostsByTag = async (givenTag: string) => {
  const posts = await getPublishedPosts();
  return {
    posts: posts.filter((post) =>
      post.frontmatter.tags.map((tag) => getSlug(tag)).includes(givenTag),
    ),
    tag: await getTagBySlug(givenTag),
  };
};
export const getCategories = async () => {
  const posts = await getPublishedPosts();
  const categories = new Set(posts.map((post) => post.frontmatter.category));

  return Array.from(categories);
};

export const getCategoriesParams = async () => {
  const categories = await getCategories();

  return categories.map((cat) => ({ slug: getSlug(cat) }));
};

export const getCategoryBySlug = async (slug: string) => {
  const categories = await getCategories();
  const fullCategoryName = categories.find((cat) => getSlug(cat) === slug);

  return fullCategoryName ? fullCategoryName : slug;
};

export const getPostsByCategory = async (givenCategory: string) => {
  const posts = await getPublishedPosts();
  return {
    posts: posts.filter(
      (post) => getSlug(post.frontmatter.category) == givenCategory,
    ),
    category: await getCategoryBySlug(givenCategory),
  };
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
