"use client";

import { Link } from "@/components/atoms/Link/Link";
import { Banner } from "@/components/molecules/Banner/Banner";
import { useThemeContext } from "@/providers/ThemeProvider";

export const ContactBanner = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <Banner
      title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
      content="Chętnie pomogę zrealizować Twój projekt."
      buttons={
        <>
          <Link href="/oferta" buttonStyle={isDark ? "dark" : "white"}>
            Zobacz czym się zajmuję
          </Link>
          <Link
            href="/blog"
            buttonStyle={isDark ? "dark-outline" : "white-outline"}
          >
            Owiedź mojego bloga
          </Link>
        </>
      }
    />
  );
};
