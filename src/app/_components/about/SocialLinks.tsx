import React from "react";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

import {
  personalGithub,
  personalTwitter,
  personalFacebook,
  personalInstagram,
} from "@/const/links";
import { List, ListItemLink } from "../atoms/List";

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Contact 🤙" />
      <List>
        <ListItemLink href={personalTwitter}>X ( Twitter )</ListItemLink>
        <ListItemLink href={personalGithub}>Github</ListItemLink>
        <ListItemLink href={personalFacebook}>Facebook</ListItemLink>
        <ListItemLink href={personalInstagram}>Instagram</ListItemLink>
      </List>
    </div>
  );
};

export default SocialLinks;
