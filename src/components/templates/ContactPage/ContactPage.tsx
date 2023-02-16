import { Header } from "@/components/atoms/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Banner } from "@/components/molecules/Banner/Banner";
import { Section } from "@/components/molecules/Section/Section";
import { Layout } from "../Layout/Layout";
import { SocialMenu } from "@/components/molecules/SocialMenu/SocialMenu";
import { addressSeparator, siteName } from "@/content/seo";
import { Seo } from "@/components/atoms/Seo/Seo";

export const ContactPage = () => {
  return (
    <>
      <Seo
        title={`Kontakt ${addressSeparator} ${siteName}`}
        description={`Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać, to tutaj znajdziesz kontakt do mnie!`}
        contentType="website"
      />
      <Layout>
        <Main>
          <Section className="bg-light-green" withMarginOnTop>
            <Header
              title="Poznajmy się!"
              titleAsH1
              subtitle="Kontakt"
              centered
              description={
                <>
                  <p>
                    Jeśli interesuje Cię współpraca lub po prostu chcesz zadać
                    pytanie, nie bój się napisać na mojego maila:{" "}
                    <Link
                      href="mailto:mr.pokorski@gmail.com"
                      className="font-medium"
                    >
                      mr.pokorski@gmail.com
                    </Link>
                    , zagdać na którymś z portali (linki poniżej) lub skorzystać
                    z formularza kontaktowego.
                  </p>
                  <SocialMenu className="text-xl justify-center gap-5" />
                </>
              }
            />
          </Section>
          <Banner
            title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
            content="Chętnie pomogę zrealizować Twój projekt."
            buttons={
              <>
                <Link href="/oferta" buttonStyle="white">
                  Zobacz czym się zajmuję
                </Link>
                <Link href="/blog" buttonStyle="white-outline">
                  Owiedź mojego bloga
                </Link>
              </>
            }
          />
        </Main>
      </Layout>
    </>
  );
};
