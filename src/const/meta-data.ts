import type { Metadata } from "next";
import {
  AUTHOR,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
  WEBSITE_NAME,
  WEBSITE_URL,
} from "./constants";

export const metaData: Metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
  keywords: WEBSITE_KEYWORDS,
  authors: AUTHOR,
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    url: WEBSITE_URL,
    images: [{ url: `${WEBSITE_URL}/og-image.svg` }],
    locale: "ja",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
      new URL("/favicons/favicon-32x32.png", WEBSITE_URL),
    ],
    shortcut: ["/favicons/favicon-32x32.png"],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  themeColor: "#ffffff",
  // manifest: `${WEBSITE_URL}/site.manifest`,
};
