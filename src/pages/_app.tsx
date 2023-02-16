import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Rubik } from "@next/font/google";
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
      <Component {...pageProps} />
    </>
  );
}
