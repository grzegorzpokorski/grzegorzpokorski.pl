/** @type {import('next-sitemap').IConfig} */
const productionHost = process.env.NEXT_PUBLIC_HOST || "grzegorzpokorski.pl";
const devHost = "localhost:3000";
const host = process.env.NODE_ENV === "production" ? productionHost : devHost;

const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

module.exports = {
  siteUrl: `${protocol}://${host}`,
  generateRobotsTxt: true,
  exclude: ["/admin"],
  sitemapSize: 7000,
};
