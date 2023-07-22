"use client";

import type { ReactNode } from "react";
// import { ThemeProvider } from "./ThemeProvider";
import { ThemeProvider } from "next-themes";

type AppProvidersProps = Readonly<{
  children: ReactNode;
}>;

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);
