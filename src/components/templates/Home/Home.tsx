import { Link } from "@/components/atoms/Link/Link";
import { Banner } from "@/components/molecules/Banner/Banner";

export const Home = () => {
  return (
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
  );
};
