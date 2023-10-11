import Header from "../Navbar/NavBar";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

export const ArticleContainer = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
        <Header />
        <main className="sm:w-2/3 max-w-2xl sm:mx-auto mx-6">{children}</main>
        <Footer />
      </div>
    </>
  );
};
