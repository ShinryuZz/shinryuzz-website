import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const personalTwitterURL: string = "https://twitter.com/shinryuslpr1127";
  const personalGithubURL: string = "https://github.com/shinryuzz";
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center gap-3">
      <div className="flex gap-8 items-center">
        <a
          href={personalTwitterURL}
          target="_blank"
          className="text-[#1DA1F2] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href={personalGithubURL}
          target="_blank"
          className="text-[#24292E] dark:text-[#FAFBFC] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>

      <div className="flex gap-3 text-sm">
        <span className="text-darker dark:text-light">
          &copy; 2023 shinryuzz. All Rights Reserved.
        </span>

        <span>|</span>

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
        </span>
      </div>
    </footer>
  );
};

export default Footer;
