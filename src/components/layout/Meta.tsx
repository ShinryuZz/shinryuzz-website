import React from "react";
import Head from "next/head";
import {
  TWITTER_ID,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
  WEBSITE_URL,
} from "@/const/constants";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>

      <meta property="og:image" content={`${WEBSITE_URL}/og-image.svg`} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta name="keywords" content={WEBSITE_KEYWORDS} />
      <meta name="author" content={TWITTER_ID} />
    </Head>
  );
};

export default Meta;
