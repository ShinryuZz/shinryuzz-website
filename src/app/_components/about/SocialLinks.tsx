import React from "react";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

import {
  personalGithub,
  personalTwitter,
  personalFacebook,
  personalInstagram,
  personalBooklog,
} from "@/const/social-links";
import { List, ListItemLink } from "../atoms/SimpleList";

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Social Links 🤙" />
      <List>
        <ListItemLink href={personalTwitter}>X ( Twitter )</ListItemLink>
        <ListItemLink href={personalGithub}>Github</ListItemLink>
        <ListItemLink href={personalFacebook}>Facebook</ListItemLink>
        <ListItemLink href={personalInstagram}>Instagram</ListItemLink>
        <ListItemLink href={personalBooklog}>ブクログ</ListItemLink>
      </List>
    </div>
  );
};

export default SocialLinks;
