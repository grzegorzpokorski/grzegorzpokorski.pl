import { Footer } from "@/components/organisms/Footer/Footer";
import { Header } from "@/components/organisms/Header/Header";
import { ReactNode } from "react";

export const Layout = ({ children }: { readonly children: ReactNode }) => (
  <>
    <Header />
    <div className="pt-20 lg:pt-28">{children}</div>
    <Footer />
  </>
);
