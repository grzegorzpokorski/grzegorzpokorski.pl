import { Header } from "@/components/atoms/Header/Header";
import { Main } from "@/components/atoms/Main/Main";
import { Section } from "@/components/molecules/Section/Section";
import { Layout } from "../Layout/Layout";
import { SectionsWithOffer } from "@/components/templates/Services/Services";
import { Seo } from "@/components/atoms/Seo/Seo";
import { addressSeparator, siteName } from "@/content/seo";
import { DefaultBanner } from "../DefaultBanner/DefaultBanner";

export const OfferPage = () => {
  return (
    <>
      <Seo
        title={`Oferta ${addressSeparator} ${siteName}`}
        description={`Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.`}
        contentType="website"
      />
      <Layout>
        <Main>
          <Section
            className="bg-light-green dark:bg-neutral-700"
            withMarginOnTop
          >
            <Header
              title="Poznaj moją ofertę"
              titleAsH1
              subtitle="Oferta"
              centered
              description={
                <p>
                  Można być człowiekiem renesansu. Ja jednak staram się
                  doskonalić w konkretnych specjalizacjach. Potrzebujesz
                  nowoczesnej, ultra szybkiej strony strony internetowej, aby
                  zaistnieć w internecie? A może gotowy projekt graficzny czeka
                  na zakodowanie? Oferuję profesjonalne usługi, które pomogą Ci
                  wkroczyć na szerokie wody internetu.
                </p>
              }
            />
          </Section>
          <SectionsWithOffer />
          <DefaultBanner />
        </Main>
      </Layout>
    </>
  );
};
