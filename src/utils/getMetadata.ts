import { siteName, siteUrl, addressSeparator, siteSlogan } from "@/content/seo";
import type { Metadata } from "next";
import { getISOStringFromPublicationDate } from "./getISOStringFromPublicationDate";

type GetMetadataArgs = {
  title: string;
  description?: string;
  canonical?: string;
} & (
  | {
      article: false;
    }
  | {
      article: true;
      publicationDate: string;
      featuredImage: {
        src: string;
        height: number;
        width: number;
        alt: string;
        type: string;
      };
    }
);

export const getMetadata = (args: GetMetadataArgs) => {
  const title =
    args.title === siteName
      ? siteName
      : `${args.title} ${addressSeparator} ${siteName}`;

  const description = args.description ? args.description : siteSlogan;

  const canonical = args.canonical ? args.canonical : siteUrl;

  const data: Metadata = {
    title: title,
    description: description,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      siteName: siteName,
      locale: "pl_PL",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/default-og-image.jpg`,
          width: 1200,
          height: 630,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: [
        { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      ],
      other: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          url: "/apple-touch-icon.png",
        },
      ],
    },
  };

  if (args.article) {
    return {
      ...data,
      openGraph: {
        ...data.openGraph,
        type: "article",
        authors: [
          {
            name: "Grzegorz Pokorski",
            url: "https://www.linkedin.com/in/grzegorz-pokorski/",
          },
        ],
        publishedTime: getISOStringFromPublicationDate(args.publicationDate),
        images: [
          {
            url: `${siteUrl}${args.featuredImage.src}`,
            width: args.featuredImage.width,
            height: args.featuredImage.height,
            type:
              args.featuredImage.type === "jpg"
                ? "image/jpeg"
                : `type/${args.featuredImage.type}`,
          },
        ],
      },
    };
  }

  return data;
};
