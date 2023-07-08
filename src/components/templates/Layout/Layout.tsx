import { SkipLink } from "@/components/atoms/SkipLink/SkipLink";
import { Footer } from "@/components/organisms/Footer/Footer";
import { MainHeader } from "@/components/organisms/MainHeader/MainHeader";
import type { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <SkipLink />
    <MainHeader />
    {children}
    <Footer />
  </>
);
