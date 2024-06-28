import {
  faGithub,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  personalGithub,
  personalTwitter,
  personalFacebook,
  personalInstagram,
} from "@/const/social-links";

const FooterIcons = () => {
  return (
    <div className="flex gap-8 items-center justify-center">
      <a
        href={personalTwitter}
        target="_blank"
        className="text-black dark:text-white hover:opacity-70 "
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
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
  );
};

export default FooterIcons;
