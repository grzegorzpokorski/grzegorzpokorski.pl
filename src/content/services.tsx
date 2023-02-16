import codeImage from "../../public/images/code.webp";
import designImage from "../../public/images/design.webp";
import pagesImage from "../../public/images/pages.webp";

export const servicesList = [
  {
    subtitle: "Strony internetowe",
    title: "Programowanie stron internetowych 🚀",
    content: (
      <>
        <p>
          Wykonuję &apos;szyte na miarę&apos; strony internetowe dostosowane i
          zaprojektowane dla konkretnej grupy docelowej oraz realizujące
          założone przez Ciebie cele.
        </p>
        <p>
          Moją specjalnością są strony dla małych oraz średnich firm oparte na
          autorskim motywie.{" "}
          <strong>
            Każda strona internetowa przygotowywana jest indywidualnie
          </strong>
          , aby zapewnić jak najlepsze wrażenia z użytkowania zarówno dla
          odbiorców jak i dla administratorów gotowego serwisu.
        </p>
        <p>
          <strong>Rozszerz zasięg swojej firmy i wyprzedź konkurencję</strong>{" "}
          dzięki profesjonalnie przygotowanej, ultra szybkiej stronie
          internetowej.
        </p>
      </>
    ),
    href: "/kontakt",
    image: {
      src: pagesImage,
      alt: "człowiek programuje stronę w biurze",
    },
  },
  {
    subtitle: "Kodowanie szablonów",
    title:
      "Kodowanie statycznych stron internetowych na podstawie projektu graficznego",
    content: (
      <>
        <p>
          Poszukujesz programisty do zakodowania Twojego szablonu graficznego?
          Dobrze trafiłeś! Oferuję wysokiej jakości,{" "}
          <strong>wolne od błędów</strong> i dostosowane do potrzeb usługę
          kodowania szablonów stron internetowych. Wykorzystuje najnowsze
          technologie, abyś mógł się cieszyć,{" "}
          <strong>w pełni kompatybilną z najnowszymi przeglądarkami</strong>,
          stroną internetową ✨.
        </p>
      </>
    ),
    href: "/kontakt",
    image: {
      src: codeImage,
      alt: "szczęśliwy człowiek koduje na sofie",
    },
  },
  {
    subtitle: "Projektowanie stron",
    title: "Potrzebujesz projektu graficznego?",
    content: (
      <>
        <p>
          Chodzi Ci po głowie nowy projekt? A może nudzi Cię wygląd twojej
          strony internetowej? Chętnie przygotują dla Ciebie{" "}
          <strong>kompleksowy projekt graficzny</strong> witryny, odpowiadający
          Twojej wizji. Na bieżąco monitoruję zmieniające się trendy w
          dziedzinie projektowania graficznego i wykorzystuję je w swoich
          pracach.
        </p>
        <p>
          Projekty wykonuję w&nbsp;<strong>Figmie</strong>&nbsp;oraz&nbsp;
          <strong>Adobe Photoshop</strong> 🎨.
        </p>
      </>
    ),
    href: "/kontakt",
    image: {
      src: designImage,
      alt: "człowiek biegnie z ołówkiem projektować nową stronę interneową",
    },
  },
];
