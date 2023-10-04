import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center gap-2 text-sm">
      <Link href="/policy" className="hover:text-cyan-800 ">
        Privacy Policy
      </Link>
      <div className="flex gap-3 ">
        <span>&copy; 2023 shinryuzz. All Rights Reserved.</span>

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
