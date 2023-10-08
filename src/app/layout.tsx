import "../styles/globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { WEBSITE_NAME } from "@/const/constants";
import { MainContainer } from "./_components/layout/Container/MainContainer";
import GoogleAnalytics from "./_components/GAnalytics";

export const metadata: Metadata = {
  title: WEBSITE_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: dark モードを app router でも 切り替えれるようにする
    <html lang="en" className="dark">
      <Head>
        <title>{WEBSITE_NAME}</title>
        <GoogleAnalytics />
      </Head>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
