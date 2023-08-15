import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
      <Header />
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center px-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
