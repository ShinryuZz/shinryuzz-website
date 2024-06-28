import React from "react";

import { type SocialLink, socialLinks } from "@/const/social-links";

import { List, ListItemLink } from "../atoms/SimpleList";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

const SocialLinks = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Social Links 🤙" />
      <List>
        {socialLinks.map((link: SocialLink) => {
          return (
            <ListItemLink key={link.url} href={link.url}>
              {link.name}
            </ListItemLink>
          );
        })}
      </List>
    </div>
  );
};

export default SocialLinks;
