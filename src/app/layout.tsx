import "../styles/globals.css";
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
  return (
    // TODO: dark モードを app router でも 切り替えれるようにする
    <html lang="en" className="dark">
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
