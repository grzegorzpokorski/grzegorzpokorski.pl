import { ContentWithImage } from "@/components/organisms/ContentWithImage/ContentWithImage";
import { twMerge } from "tailwind-merge";
import { servicesList } from "../../../content/services";

export const SectionsWithOffer = () => {
  return (
    <>
      {servicesList.map((service, i) => (
        <ContentWithImage
          key={service.title}
          {...service}
          reverse={i % 2 === 0 && true}
          className={twMerge(i % 2 === 1 && "bg-light-green")}
        />
      ))}
    </>
  );
};
