export const siteSlogan =
  "Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.";
export const siteName = "Grzegorz Pokorski";
export const addressSeparator = "|";

const productionHost = "grzegorzpokorski.pl";
const devHost = "localhost:3000";
const host = process.env.NODE_ENV === "production" ? productionHost : devHost;
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

export const siteUrl = `${protocol}://${host}`;
