import { siteName, siteSlogan, siteUrl } from "@/content/seo";
import { usePermalink } from "@/hooks/usePermalink";
import { getISOStringFromPublicationDate } from "@/utils/getISOStringFromPublicationDate";
import HeadTag from "next/head";
import { StaticImageData } from "next/image";

type SeoProps = {
  title: string;
  description?: string;
  contentType?: string;
  publicationDate?: string;
  featuredImage?: string;
};

type Shema = {
  "@context": string;
  "@graph": {
    "@type": string[];
    "@id": string;
    name: string;
    sameAs?: string[];
    description?: string;
    url?: string;
    publisher?: {
      "@id": string;
    };
    inLanguage?: string;
    image?: {
      "@type": string;
      "@id": string;
      url: string | StaticImageData | undefined;
      inLanguage: string;
      width: number;
      height: number;
      caption: string;
    };
    datePublished?: string;
  }[];
};

export const Seo = ({
  title,
  description,
  contentType,
  publicationDate,
  featuredImage,
}: SeoProps) => {
  const permalink = usePermalink();

  const robotsMeta =
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  // const robotsMeta: string = "noindex, nofollow";

  const schema: Shema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": `${siteUrl}/#person`,
        name: siteName,
        sameAs: [
          "https://www.instagram.com/grzegorz_pokorski/",
          "https://www.linkedin.com/in/grzegorz-pokorski/",
          "https://www.facebook.com/grzegorzpokorski.software/",
        ],
      },
      {
        "@type": ["WebSite"],
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: siteName,
        description: siteSlogan,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "pl-PL",
      },
    ],
  };

  if (contentType === "article") {
    schema["@graph"].push({
      "@type": ["Article"],
      "@id": `${permalink}/article`,
      url: permalink,
      name: title,
      description: description,
      image: {
        "@type": "ImageObject",
        "@id": `${permalink}#image`,
        url: featuredImage,
        inLanguage: "pl-PL",
        width: 1200,
        height: 630,
        caption: siteName,
      },
      datePublished:
        publicationDate && getISOStringFromPublicationDate(publicationDate),
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    });
  }

  return (
    <HeadTag>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />

      <meta key="robots" name="robots" content={robotsMeta} />
      <meta key="googlebot" name="googlebot" content={robotsMeta} />
      <meta key="bingbot" name="bingbot" content={robotsMeta} />

      <link key="canonical" rel="canonical" href={permalink} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:url" content={permalink} />
      <meta property="og:site_name" content={siteName} />

      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content={contentType} />

      {contentType === "article" && (
        <>
          <meta
            property="article:author"
            content="https://www.linkedin.com/in/grzegorz-pokorski/"
          />
          <meta
            property="article:published_time"
            content={
              publicationDate &&
              getISOStringFromPublicationDate(publicationDate)
            }
          />
        </>
      )}

      <link rel="index" title="Strona główna" href={siteUrl} />

      <meta
        property="og:image"
        content={`${siteUrl}${
          featuredImage ? featuredImage : "/images/default-og-image.jpg"
        }`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />

      <meta name="twitter:card" content="summary_large_image" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
    </HeadTag>
  );
};
