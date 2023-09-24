import { WEBSITE_NAME } from "@/const/constants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

  return (
    <Html lang="ja">
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
