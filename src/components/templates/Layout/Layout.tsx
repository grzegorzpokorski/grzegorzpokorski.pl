import { Footer } from "@/components/organisms/Footer/Footer";
import { MainHeader } from "@/components/organisms/MainHeader/Header";
import { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <MainHeader />
    {children}
    <Footer />
  </>
);
