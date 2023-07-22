"use client";

import { useTheme } from "next-themes";
import { Header } from "@/components/molecules/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Banner } from "@/components/molecules/Banner/Banner";
import { Section } from "@/components/molecules/Section/Section";
import { SectionsWithOffer } from "@/components/templates/Services/Services";
import { getSlug } from "@/utils/getSlug";

export const OfferPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <Main>
      <Section
        bgColor={{ light: "light-green", dark: "light-gray" }}
        withMarginOnTop
        ariaLabelledBy={getSlug("Poznaj moją ofertę")}
      >
        <Header
          title="Poznaj moją ofertę"
          titleId={getSlug("Poznaj moją ofertę")}
          titleAsH1
          subtitle="Oferta"
          centered
          description={
            <p>
              Można być człowiekiem renesansu. Ja jednak staram się doskonalić w
              konkretnych specjalizacjach. Potrzebujesz nowoczesnej, ultra
              szybkiej strony strony internetowej, aby zaistnieć w internecie? A
              może gotowy projekt graficzny czeka na zakodowanie? Oferuję
              profesjonalne usługi, które pomogą Ci wkroczyć na szerokie wody
              internetu.
            </p>
          }
        />
      </Section>
      <SectionsWithOffer />
      <Banner
        title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
        content="Chętnie pomogę zrealizować Twój projekt."
        buttons={
          <>
            <Link href="/kontakt" variant={isDark ? "dark" : "white"}>
              Skontaktuj się ze mną
            </Link>
            <Link
              href="/blog"
              variant={isDark ? "dark-outline" : "white-outline"}
            >
              Odwiedź mój blog
            </Link>
          </>
        }
      />
    </Main>
  );
};
