import "@/styles/globals.css";
import "@/styles/customized-dracula-prism.css";

import type { AppProps } from "next/app";
import { NormalLayout, MarkdownLayout } from "@/components/layout/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  if (pathname == "/blog/[slug]") {
    return (
      <MarkdownLayout>
        <Component {...pageProps} />
      </MarkdownLayout>
    );
  }
  return (
    <NormalLayout>
      <Component {...pageProps} />
    </NormalLayout>
  );
}
