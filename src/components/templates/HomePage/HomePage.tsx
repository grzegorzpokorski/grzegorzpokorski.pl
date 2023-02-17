import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Hero } from "@/components/molecules/Hero/Hero";
import { PromoPosts } from "@/components/organisms/PromoPosts/PromoPosts";
import { siteSlogan } from "@/content/seo";
import { Post } from "@/types";
import HeroImage from "../../../../public/images/hero.webp";
import { DefaultBanner } from "../DefaultBanner/DefaultBanner";
import { Layout } from "../Layout/Layout";

export const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Seo
        title={`${siteSlogan}`}
        description={`Programuję strony internetowe, koduję szablony graficzne oraz przygotowuję projekty graficzne stron internetowych.`}
        contentType="website"
      />
      <Layout>
        <Main withMarginOnTop>
          <Hero
            title="Cześć, jestem Grzegorz!"
            description={
              <p>
                Witam w moich skromnych progach! Jestem Frontend Developerem,
                nieustannie rozwijam umiejętności programistyczne, aby
                dostarczać nowoczesne oraz wydajne strony internetowe. Zdobywaną
                wiedzą oraz przemyśleniami staram się dzielić z innymi tutaj na
                moim <Link href="/blog">blogu</Link>.
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
          />
          <PromoPosts
            title="Najnowsze aktykuły na blogu 🔥"
            subtitle="Blog"
            posts={posts}
            link
          />
          <DefaultBanner />
        </Main>
      </Layout>
    </>
  );
};
