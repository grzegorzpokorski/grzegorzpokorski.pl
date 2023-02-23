import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl" className="scrollbar-gutter-stable">
      <Head />
      <body className="bg-white dark:bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
