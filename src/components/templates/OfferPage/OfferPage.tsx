import { Header } from "@/components/atoms/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Banner } from "@/components/molecules/Banner/Banner";
import { Section } from "@/components/molecules/Section/Section";
import { Layout } from "../Layout/Layout";
import { SectionsWithOffer } from "@/components/templates/Services/Services";
import { Seo } from "@/components/atoms/Seo/Seo";
import { addressSeparator, siteName } from "@/content/seo";

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
          <Section className="bg-light-green" withMarginOnTop>
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
          <Banner
            title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
            content="Chętnie pomogę zrealizować Twój projekt."
            buttons={
              <>
                <Link href="/kontakt" buttonStyle="white">
                  Skontaktuj się ze mną
                </Link>
                <Link href="/oferta" buttonStyle="white-outline">
                  Zobacz ofertę
                </Link>
              </>
            }
          />
        </Main>
      </Layout>
    </>
  );
};
