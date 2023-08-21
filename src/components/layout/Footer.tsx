import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center gap-3">
      <div className="flex gap-3 text-sm">
        <span className="text-darker dark:text-light">
          &copy; 2023 shinryuzz. All Rights Reserved.
        </span>

        {/* <span className="hidden sm:block">|</span>

        <span className="flex items-center gap-1">
          Powered by{" "}
          <a
            href="https://vercel.com/home"
            target="_blank"
            className="hover:opacity-70"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={64}
              height={24}
            />
          </a>
        </span> */}
      </div>
    </footer>
  );
};

export default Footer;
