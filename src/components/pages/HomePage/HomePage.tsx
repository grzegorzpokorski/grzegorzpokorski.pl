"use client";

import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Hero } from "@/components/molecules/Hero/Hero";
import { PromoPosts } from "@/components/organisms/PromoPosts/PromoPosts";
import { DefaultBanner } from "@/components/templates/DefaultBanner/DefaultBanner";
import { useThemeContext } from "@/providers/ThemeProvider";
import HeroImage from "../../../../public/images/hero.webp";
import HeroImageDark from "../../../../public/images/hero-dark.webp";
import { Post } from "@/types";

export const HomePage = ({ posts }: { posts: Post[] }) => {
  const { theme } = useThemeContext();
  return (
    <Main withMarginOnTop>
      <Hero
        title="Cześć, jestem Grzegorz!"
        description={
          <p>
            Witam w moich skromnych progach! Jestem Frontend Developerem,
            nieustannie rozwijam umiejętności programistyczne, aby dostarczać
            nowoczesne oraz wydajne strony internetowe. Zdobywaną wiedzą oraz
            przemyśleniami staram się dzielić z innymi tutaj na moim{" "}
            <Link href="/blog">blogu</Link>.
          </p>
        }
        links={
          <>
            <Link href="/oferta" variant="green">
              Zobacz ofertę
            </Link>
            <Link href="/kontakt" variant="green-outline">
              Skontaktuj się ze mną
            </Link>
          </>
        }
        image={{
          alt: "zadowoleni klienci przeglądają otrzymany produkt",
          src: theme === "dark" ? HeroImageDark : HeroImage,
        }}
      />
      <PromoPosts
        title="Najnowsze aktykuły na blogu 🔥"
        subtitle="Blog"
        posts={posts}
        link
      />
      <DefaultBanner />
    </Main>
  );
};
