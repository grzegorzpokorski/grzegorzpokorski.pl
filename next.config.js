/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/oferta/tworzenie-stron-internetowych",
        destination: "/oferta",
        permanent: true,
      },
      {
        source: "/oferta/kodowanie-projektow-graficznych",
        destination: "/oferta",
        permanent: true,
      },
      {
        source: "/oferta/projektowanie-stron",
        destination: "/oferta",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
