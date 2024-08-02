import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center gap-2 text-sm">
      <Link href="/policy" className="hover:text-primary ">
        Privacy Policy
      </Link>
      <p>&copy; 2024 shinryuzz. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
