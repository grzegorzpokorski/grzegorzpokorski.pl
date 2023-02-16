import { Footer } from "@/components/organisms/Footer/Footer";
import { Header } from "@/components/organisms/Header/Header";
import { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
