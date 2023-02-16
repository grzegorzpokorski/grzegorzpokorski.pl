import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Banner } from "@/components/molecules/Banner/Banner";
import { Hero } from "@/components/molecules/Hero/Hero";
import HeroImage from "../../../../public/images/hero.webp";
import { Layout } from "../Layout/Layout";

export const AboutPage = () => {
  return (
    <Layout>
      <Main withMarginOnTop>
        <Hero
          title="Cześć, jestem Grzegorz!"
          titleAsH1
          description={
            <>
              <p>
                Jak można się domyśleć jestem frontend developerem. Uwielbiam
                tworzyć dobrze wyglądające oraz realizujące cele biznesowe
                strony internetowe. Dobra strona to również ta strona, która
                jest wydajna oraz dostępna. Dlatego nieustannie uczę sie
                najnowszych technologi takich jak React, czy Next.js, które
                pozwalają na osięgnięcie niesamowitych wyników.
              </p>
              <p>
                W wolnej chwili staram się dzielić zdobytą wiedzą oraz
                przemyśleniami na łamach artykułów na moim{" "}
                <a href="/blog">blogu</a>, do którego odwiedzenia gorąco Cię
                zachęcam 🙂
              </p>
              <p>
                Jeśli interesuje Cię współpraca lub po prostu chcesz porozmawiać
                na różne tematy, nie tylko programistyczne, śmiało{" "}
                <a href="/kontakt">kontaktuj się ze mną</a>!
              </p>
              <p>PS. Poniżej znajdziesz linki, gdzie możesz mnie znaleźć 👇</p>
            </>
          }
          alignToLeftOnMobile
          links={
            <>
              <Link href="/oferta" buttonStyle="green">
                Zobacz czym się zajmuje
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
