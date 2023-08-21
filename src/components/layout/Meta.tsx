import React from "react";
import Head from "next/head";
import {
  TWITTER_ID,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
} from "@/const/constants";

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <meta property="og:image" content="/og-image.svg" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta name="keywords" content={WEBSITE_KEYWORDS} />
      <meta name="author" content={TWITTER_ID} />
    </Head>
  );
};

export default Meta;
