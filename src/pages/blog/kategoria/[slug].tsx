import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Seo } from "@/components/atoms/Seo/Seo";
import { Banner } from "@/components/molecules/Banner/Banner";
import { BlogHeader } from "@/components/molecules/BlogHeader/BlogHeader";
import { Layout } from "@/components/templates/Layout/Layout";
import { addressSeparator, siteName } from "@/content/seo";

const CategoryArchive = () => (
  <>
    <Seo
      title={`Blog ${addressSeparator} ${siteName}`}
      description={`Wszystkie artykuły, które pojawiły się na blogu. Przeważa tematyka związana z tworzeniem stron internetowych, ale znajdzie się coś również z mniej technicznych zagadnień.`}
      contentType="website"
    />
    <Layout>
      <Main withMarginOnTop>
        <BlogHeader>
          <div className="w-full lg:w-8/12 flex flex-col gap-3">
            <h1 className="font-bold text-2xl md:text-3xl text-zinc-800">
              Kategoria:
            </h1>
          </div>
        </BlogHeader>
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

export default CategoryArchive;
