import { ContactPage } from "@/components/templates/ContactPage/ContactPage";
import type { Metadata } from "next";
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
