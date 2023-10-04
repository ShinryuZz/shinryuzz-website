"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { WEBSITE_NAME } from "@/const/constants";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuToggle = () => setIsOpen(!isOpen);
  const handleMenuClose = () => setIsOpen(false);

  const paths = ["home", "about", "blog", "photos"];

  const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <header className="p-6 z-10">
      <nav className="w-full flex sm:justify-around justify-between items-center">
        <Link href="/" className="hover:text-cyan-800 flex items-center gap-3">
          <h1 className="text-xl">{WEBSITE_NAME}</h1>
        </Link>

        <div className="items-center sm:hidden">
          <button onClick={handleMenuToggle} aria-label="toggle-dark-mode">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
        <div
          className={
            isOpen
              ? "fixed top-16 right-0 bottom-0 left-0 flex flex-col gap-2 bg-light dark:bg-darker justify-start items-center"
              : "hidden sm:flex items-center gap-8"
          }
        >
          {paths.map((path) =>
            path == "home" ? (
              <Link
                key={path}
                href="/"
                onClick={handleMenuClose}
                className={`hover:text-cyan-800 hover:border-b border-cyan-800`}
              >
                Home
              </Link>
            ) : (
              <Link
                key={path}
                href={`/${path}`}
                onClick={handleMenuClose}
                className={`hover:text-cyan-800 hover:border-b border-cyan-800`}
              >
                {capitalize(path)}
              </Link>
            )
          )}
          {/* <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="p-1 hover:bg-light-200 dark:hover:bg-darker-700 hover:cursor-pointer"
            onClick={() => toggle(isDarkMode)}
          /> */}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
