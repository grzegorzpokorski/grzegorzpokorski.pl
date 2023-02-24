import { Header } from "@/components/atoms/Header/Header";
import { Link } from "@/components/atoms/Link/Link";
import { Main } from "@/components/atoms/Main/Main";
import { Section } from "@/components/molecules/Section/Section";
import { SocialMenu } from "@/components/molecules/SocialMenu/SocialMenu";
import { ContactBanner } from "../ContactBanner/ContactBanner";

export const ContactPage = () => {
  return (
    <Main>
      <Section className="bg-light-green dark:bg-zinc-800" withMarginOnTop>
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
                , zagdać na którymś z portali (linki poniżej 👇).
              </p>
              <SocialMenu className="text-xl justify-center gap-5" />
            </>
          }
        />
      </Section>
      <ContactBanner />
    </Main>
  );
};
