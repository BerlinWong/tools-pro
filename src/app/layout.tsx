"use client";

import "./globals.css";
import "./styles/spinkit.min.css";
import { ThemeProvider } from "./context/theme-context";
import { ClerkContainer } from "./views/MainClerkPage/clerk-container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ClerkContainer>{children}</ClerkContainer>
    </ThemeProvider>
  );
}
