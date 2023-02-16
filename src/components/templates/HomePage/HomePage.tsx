import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Banner } from "@/components/molecules/Banner/Banner";
import { Hero } from "@/components/molecules/Hero/Hero";
import HeroImage from "../../../../public/images/hero.webp";
import { Layout } from "../Layout/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <Main withMarginOnTop>
        <Hero
          title="Cześć, jestem Grzegorz!"
          description={
            <p>
              Jestem Frontend Developerem z wyboru oraz pasji. Nieustannie
              rozwijam umiejętności programistyczne, aby dostarczać nowoczesne
              oraz wydajne strony internetowe. Zdobywaną wiedzą oraz
              przemyśleniami staram się dzielić z innymi tutaj na moim{" "}
              <Link href="/blog">blogu</Link>.
            </p>
          }
          links={
            <>
              <Link href="/oferta" buttonStyle="green">
                Zobacz ofertę
              </Link>
              <Link href="/kontakt" buttonStyle="green-outline">
                Skontaktuj się ze mną
              </Link>
            </>
          }
          image={{
            alt: "zadowoleni klienci przeglądają otrzymany produkt",
            src: HeroImage,
          }}
          withMarginOnTop
          className="bg-white"
        />
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
  );
};
