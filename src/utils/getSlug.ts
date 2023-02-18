import slugify from "slugify";

export const getSlug = (text: string): string =>
  slugify(text, { replacement: "-", lower: true });
