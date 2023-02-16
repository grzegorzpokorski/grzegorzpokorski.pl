import { memo } from "react";
import { Logo } from "@/components/molecules/Logo/Logo";
import { SocialMenu } from "@/components/molecules/SocialMenu/SocialMenu";
import { FooterMenu } from "@/components/molecules/FooterMenu/FooterMenu";

type FooterProps = {
  isHome?: boolean;
};

export const Footer = memo(({ isHome }: FooterProps) => {
  return (
    <footer className="py-20 bg-white border-t-2 border-greenLight">
      <div className="container mx-auto px-3 flex flex-wrap flex-col md:flex-row justify-between items-center gap-6">
        <span className="md:order-2 hover:underline">
          <Logo isHome={isHome} />
        </span>
        <nav className="md:order-1 grow basis-0">
          <FooterMenu />
        </nav>
        <p className="basis-full text-center text-gray-500 md:order-4">
          Grzegorz Pokorski © {new Date().getFullYear()}. Doodles by
          doodleipsum.com. Created by Grzegorz Pokorski.
        </p>
        <div className="flex flex-row grow basis-0 gap-4 text-green md:justify-end md:order-3 text-lg">
          <SocialMenu className="text-green-500 gap-5" />
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
