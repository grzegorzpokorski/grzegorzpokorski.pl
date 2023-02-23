import "@/styles/globals.css";
import "@/styles/prism-theme.css";

import { ReactNode } from "react";
import { AppProviders } from "@/providers/AppProviders";
import { Layout } from "@/components/templates/Layout/Layout";

import { Rubik } from "next/font/google";
const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <html lang="pl" className={`${rubik.variable}`}>
      <body>
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
      </body>
    </html>
  );
}
