import "../styles/globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";

import { metaData } from "@/const/meta-data";

import GoogleAnalytics from "./_components/analytics/GAnalytics";
import { MainContainer } from "./_components/layout/Container/MainContainer";


export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
