/* eslint-disable @typescript-eslint/require-await */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects: async () => {
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

export default nextConfig;
