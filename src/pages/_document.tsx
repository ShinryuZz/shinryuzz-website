import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          // href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css" // ローカルファイルを読み込ませているためc/o
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
