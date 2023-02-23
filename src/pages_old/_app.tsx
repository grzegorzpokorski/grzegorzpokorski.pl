import "@/styles/globals.css";
import "@/styles/prism-theme.css";
import type { AppProps } from "next/app";

import { Rubik } from "next/font/google";
import { AppProviders } from "@/providers/AppProviders";
const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}</style>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  );
}
