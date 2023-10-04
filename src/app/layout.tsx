import "../styles/globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { WEBSITE_NAME } from "@/const/constants";
import { MainContainer } from "./_components/layout/Container/MainContainer";

export const metadata: Metadata = {
  title: WEBSITE_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

  return (
    // TODO: dark モードを app router でも 切り替えれるようにする
    <html lang="en" className="dark">
      <Head>
        <title>{WEBSITE_NAME}</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
