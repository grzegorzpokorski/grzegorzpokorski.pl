import { Link } from "@/components/atoms/Link/Link";
import { Banner } from "@/components/molecules/Banner/Banner";

export const ContactBanner = () => {
  return (
    <Banner
      title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
      content="Chętnie pomogę zrealizować Twój projekt."
      buttons={
        <>
          <Link href="/oferta" variant="white">
            Zobacz czym się zajmuję
          </Link>
          <Link href="/blog" variant="banner">
            Owiedź mojego bloga
          </Link>
        </>
      }
    />
  );
};
