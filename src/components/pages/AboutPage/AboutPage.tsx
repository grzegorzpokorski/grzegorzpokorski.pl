"use client";

import { useTheme } from "next-themes";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Hero } from "@/components/molecules/Hero/Hero";
import { PromoPosts } from "@/components/organisms/PromoPosts/PromoPosts";
import { DefaultBanner } from "@/components/templates/DefaultBanner/DefaultBanner";
import HeroImage from "../../../../public/images/about.webp";
import HeroImageDark from "../../../../public/images/about-dark.webp";
import type { Post } from "@/types";

export const AboutPage = ({ posts }: { posts: Post[] }) => {
  const { resolvedTheme } = useTheme();
  return (
    <Main withMarginOnTop>
      <Hero
        title="Cześć, jestem Grzegorz!"
        titleAsH1
        description={
          <>
            <p>
              Jak można się domyśleć jestem frontend developerem. Uwielbiam
              tworzyć dobrze wyglądające oraz realizujące cele biznesowe strony
              internetowe. Dobra strona to również ta strona, która jest wydajna
              oraz dostępna. Dlatego nieustannie uczę sie najnowszych technologi
              takich jak React, czy Next.js, które pozwalają na osięgnięcie
              niesamowitych wyników.
            </p>
            <p>
              W wolnej chwili staram się dzielić zdobytą wiedzą oraz
              przemyśleniami na łamach artykułów na moim{" "}
              <Link href="/blog">blogu</Link>, do którego odwiedzenia gorąco Cię
              zachęcam 🙂
            </p>
            <p>
              Jeśli interesuje Cię współpraca lub po prostu chcesz porozmawiać
              na różne tematy, nie tylko programistyczne, śmiało{" "}
              <Link href="/kontakt">kontaktuj się ze mną</Link>!
            </p>
            <p>PS. Poniżej znajdziesz linki, gdzie możesz mnie znaleźć 👇</p>
          </>
        }
        alignToLeftOnMobile
        links={
          <>
            <Link href="/oferta" variant="green">
              Zobacz czym się zajmuje
            </Link>
            <Link href="/kontakt" variant="green-outline">
              Skontaktuj się ze mną
            </Link>
          </>
        }
        image={{
          alt: "zadowoleni klienci przeglądają otrzymany produkt",
          src: resolvedTheme === "dark" ? HeroImageDark : HeroImage,
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
