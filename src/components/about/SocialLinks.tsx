import React from "react";
import TitleWithUnderline from "../atom/TitleWithUnderline";

import {
  personalGithub,
  personalTwitter,
  personalFacebook,
  personalInstagram,
} from "@/const/links";

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-10">
      <TitleWithUnderline title="Contact 🤙" />
      <ul className="flex flex-col gap-3 list-disc list-inside ml-2 text-red">
        <li>
          <a
            href={personalTwitter}
            target="_blank"
            className="text-light hover:opacity-70"
          >
            X ( Twitter )
          </a>
        </li>
        <li>
          <a
            href={personalGithub}
            target="_blank"
            className="text-light hover:opacity-70"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href={personalInstagram}
            target="_blank"
            className="text-light hover:opacity-70"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href={personalFacebook}
            target="_blank"
            className="text-light hover:opacity-70"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
