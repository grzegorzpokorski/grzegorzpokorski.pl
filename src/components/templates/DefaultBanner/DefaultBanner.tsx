"use client";

import { Link } from "@/components/atoms/Link/Link";
import { Banner } from "@/components/molecules/Banner/Banner";
import { useThemeContext } from "@/providers/ThemeProvider";

export const DefaultBanner = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <Banner
      title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
      content="Chętnie pomogę zrealizować Twój projekt."
      buttons={
        <>
          <Link href="/kontakt" variant={isDark ? "dark" : "white"}>
            Skontaktuj się ze mną
          </Link>
          <Link
            href="/oferta"
            variant={isDark ? "dark-outline" : "white-outline"}
          >
            Zobacz ofertę
          </Link>
        </>
      }
    />
  );
};
