import "../styles/globals.css";
import type { Metadata } from "next";
import { MainContainer } from "./_components/layout/Container/MainContainer";
import GoogleAnalytics from "./_components/analytics/GAnalytics";
import { metaData } from "@/const/meta-data";

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: dark モードを app router でも 切り替えれるようにする
    <html lang="en" className="dark">
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
