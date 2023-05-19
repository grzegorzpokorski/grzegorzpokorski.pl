import { OfferPage } from "@/components/templates/OfferPage/OfferPage";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";
import { siteUrl } from "@/content/seo";

export function generateMetadata(): Metadata {
  return getMetadata({
    article: false,
    title: "Oferta",
    canonical: `${siteUrl}/oferta`,
  });
}
export default function Offer() {
  return <OfferPage />;
}
