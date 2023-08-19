import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export const NormalLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
      <Header />
      <main className="container mx-auto flex flex-col flex-grow items-center justify-center px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const MarkdownLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
      <Header />
      <main className="container mx-auto items-center justify-center px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
