import "@/styles/globals.css";
import "@/styles/prism-theme.css";

import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AppProviders } from "@/providers/AppProviders";
import { Layout } from "@/components/templates/Layout/Layout";

import { Rubik } from "next/font/google";
import type { Metadata } from "next";
import { getMetadata } from "@/utils/getMetadata";
import { siteName } from "@/content/seo";
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "latin-ext"],
});

export function generateMetadata(): Metadata {
  return getMetadata({ article: false, title: siteName });
}

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="pl" className={`${rubik.variable} scrollbar-gutter-stable`}>
      <body className="bg-white dark:bg-zinc-800">
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
