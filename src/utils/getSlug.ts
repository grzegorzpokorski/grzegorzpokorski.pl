import slugify from "@sindresorhus/slugify";

export const getSlug = (text: string): string =>
  slugify(text, {
    separator: "-",
    decamelize: false,
  });
