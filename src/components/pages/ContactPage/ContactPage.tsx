import { Header } from "@/components/atoms/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Section } from "@/components/molecules/Section/Section";
import { SocialMenu } from "@/components/molecules/SocialMenu/SocialMenu";
import { ContactBanner } from "@/components/templates/ContactBanner/ContactBanner";
import { getSlug } from "@/utils/getSlug";

export const ContactPage = () => {
  return (
    <Main>
      <Section
        ariaLabelledBy={getSlug("Poznajmy się!")}
        withMarginOnTop
        bgColor={{ light: "light-green", dark: "dark-gray" }}
      >
        <Header
          title="Poznajmy się!"
          titleId={getSlug("Poznajmy się!")}
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
                , zagdać na którymś z portali (linki poniżej 👇).
              </p>
              <div className="flex flex-col items-center text-xl">
                <SocialMenu />
              </div>
            </>
          }
        />
      </Section>
      <ContactBanner />
    </Main>
  );
};
