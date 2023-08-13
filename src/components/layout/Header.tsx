import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative bg-darker w-full flex justify-around items-center p-5 shadow-xl">
      <Link href="/">
        <h1 className="text-xl">🦘 shinryuzz</h1>
      </Link>
      <nav className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/photos">Photos</Link>
      </nav>
      {/* TODO: light/dark モード切り替え */}
    </header>
  );
};

export default Header;
