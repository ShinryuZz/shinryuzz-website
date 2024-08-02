import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { github, twitter } from "@/const/social-links";

const FooterIcons = () => {
  return (
    <div className="flex gap-8 items-center justify-center">
      <a
        href={twitter}
        target="_blank"
        className="text-black dark:text-white hover:opacity-70 "
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </a>
      <a
        href={github}
        target="_blank"
        className="text-[#24292E] dark:text-[#FAFBFC] hover:opacity-70"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
  );
};

export default FooterIcons;
