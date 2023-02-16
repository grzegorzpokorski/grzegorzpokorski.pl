import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type MainProps = {
  children: ReactNode;
  withMarginOnTop?: boolean;
};

export const Main = ({ children, withMarginOnTop }: MainProps) => {
  return (
    <main
      id="tresc"
      className={twMerge(withMarginOnTop ? "mt-20 lg:mt-28" : "")}
    >
      {children}
    </main>
  );
};
