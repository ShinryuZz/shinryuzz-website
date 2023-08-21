import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type Props = {
  children: React.ReactNode;
};

export const NormalLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
        <Header />
        <main className="sm:w-2/3 max-w-2xl md:mx-auto flex flex-col flex-grow items-center justify-start py-10 mx-10 sm:mt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export const MarkdownLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
        <Header />
        <main className="sm:w-2/3 max-w-2xl mx-auto px-10 sm:px-0">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
