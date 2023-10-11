import Header from "../Navbar/NavBar";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen text-darker dark:text-light bg-light dark:bg-darker">
        <Header />
        <main className="sm:w-2/3 max-w-2xl flex flex-col flex-grow items-center justify-start py-8 sm:mt-10 sm:mx-auto mx-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
