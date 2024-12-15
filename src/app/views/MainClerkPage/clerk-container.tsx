"use client";
import React from "react";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import { useTheme } from "@/app/context/theme-context";
import { dark } from "@clerk/themes";
import Navbar from "@/app/components/Navbar/navbar";


export const ClerkContainer = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  return (
    <ClerkProvider
      appearance={isDarkMode ? { baseTheme: dark } : { baseTheme: undefined }}
    >
      <html lang="en">
        <body>
          <ClerkLoading>
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#efefef]">
              <div className="sk-grid">
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
                <div className="sk-grid-cube"></div>
              </div>
              <div>Loading...</div>
            </div>
          </ClerkLoading>
          <ClerkLoaded>
            <header>
              <Navbar />
            </header>
            <main>
              {/* <HomePageMain /> */}
              {children}
            </main>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default ClerkContainer;
