import slugify from "slugify";

export const getIDFromString = (s: string): string => {
  return slugify(s, { lower: true, strict: true });
};
