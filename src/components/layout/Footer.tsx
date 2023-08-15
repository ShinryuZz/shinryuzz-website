import React from "react";

const Footer = () => {
  const personalTwitterURL: string = "https://twitter.com/shinryuslpr1127";
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center">
      <span className="text-darker dark:text-light">
        &copy; 2023{" "}
        <a
          href={personalTwitterURL}
          target="_blank"
          className="hover:underline hover:text-cyan-800"
        >
          shinryuzz
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
