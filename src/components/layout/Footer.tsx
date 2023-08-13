import React from "react";

const Footer = () => {
  const personalTwitterURL: string = "https://twitter.com/shinryuslpr1127";
  return (
    <footer className="fixed bottom-0 w-full p-5 border-t border-darker-400 flex flex-col justify-center items-center ">
      <span className="text-darker-50 sm:text-center">
        &copy; 2023{" "}
        <a
          href={personalTwitterURL}
          target="_blank"
          className="hover:underline"
        >
          shinryuzz
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
