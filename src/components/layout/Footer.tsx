import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  personalGithub,
  personalTwitter,
  personalFacebook,
  personalInstagram,
} from "@/const/links";

const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col justify-center items-center gap-3">
      <div className="flex gap-8 items-center justify-center">
        <a
          href={personalTwitter}
          target="_blank"
          className="text-[#1DA1F2] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <a
          href={personalGithub}
          target="_blank"
          className="text-[#24292E] dark:text-[#FAFBFC] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href={personalInstagram}
          target="_blank"
          className="text-[#E1306C] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          href={personalFacebook}
          target="_blank"
          className="text-[#3b5998] hover:opacity-70"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
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
