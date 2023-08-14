"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuToggle = () => setIsOpen(!isOpen);
  const handleMenuClose = () => setIsOpen(false);

  const pages: string[] = ["home", "about", "blog", "photos"];

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <header className="bg-darker p-5 shadow-xl z-10">
      <nav className="w-full flex sm:justify-around justify-between items-center ">
        <Link href="/" className="hover:text-cyan-800 flex items-center gap-3">
          <h1 className="text-xl">shinryuzz</h1>
        </Link>
        <div className="items-center sm:hidden">
          <button onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div
          className={
            isOpen
              ? "fixed top-16 right-0 bottom-0 left-0 flex flex-col gap-2 bg-darker justify-start items-center"
              : "hidden sm:flex items-center gap-8"
          }
        >
          {pages.map((page) =>
            page == "home" ? (
              <Link
                key={page}
                href="/"
                onClick={handleMenuClose}
                className="hover:text-cyan-800 hover:border-b border-cyan-800"
              >
                Home
              </Link>
            ) : (
              <Link
                key={page}
                href={`/${page}`}
                onClick={handleMenuClose}
                className="hover:text-cyan-800 hover:border-b border-cyan-800"
              >
                {capitalize(page)}
              </Link>
            )
          )}
        </div>

        {/* TODO: light/dark モード切り替え */}
      </nav>
    </header>
  );
};

export default Header;
