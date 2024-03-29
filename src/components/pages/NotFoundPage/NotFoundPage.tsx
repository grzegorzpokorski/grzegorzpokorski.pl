import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Hero } from "@/components/molecules/Hero/Hero";
import NotFoundImage from "../../../../public/images/404.webp";

export const NotFoundPage = () => {
  return (
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
            <Link href="/" variant="green">
              Zabierz mnie na stronę główną
            </Link>
          </>
        }
        image={{
          alt: "zadowoleni klienci przeglądają otrzymany produkt",
          src: NotFoundImage,
        }}
      />
    </Main>
  );
};
