import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage/ContactPage";
import { getMetadata } from "@/utils/getMetadata";
import { siteUrl } from "@/content/seo";

export function generateMetadata(): Metadata {
  return getMetadata({
    article: false,
    title: "Kontakt",
    canonical: `${siteUrl}/kontakt`,
  });
}

export default function Contact() {
  return <ContactPage />;
}
