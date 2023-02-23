import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Hero } from "@/components/molecules/Hero/Hero";
import { addressSeparator, siteName } from "@/content/seo";
import NotFoundImage from "../../../../public/images/404.webp";
import { Layout } from "../Layout/Layout";

export const NotFoundPage = () => {
  return (
    <>
      <Seo
        title={`404 ${addressSeparator} ${siteName}`}
        description={`Strona, której szukasz, nie istnieje (błąd 404)`}
        featuredImage={NotFoundImage.src}
      />
      <Layout>
        <Main withMarginOnTop>
          <Hero
            title="Ta przestrzeń jest pusta"
            titleAsH1
            description={
              <>
                <p>Strona, której szukasz, nie istnieje (błąd 404)</p>
              </>
            }
            links={
              <>
                <Link href="/" buttonStyle="green">
                  Zabierz mnie na stronę główną
                </Link>
              </>
            }
            image={{
              alt: "zadowoleni klienci przeglądają otrzymany produkt",
              src: NotFoundImage,
            }}
            withMarginOnTop
            className="bg-white"
          />
        </Main>
      </Layout>
    </>
  );
};
