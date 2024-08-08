import React from "react";

import { TWITTER_ID } from "@/const/general";
import { twitter } from "@/const/social-links";

const TopText = () => {
  return (
    <p className="text-2xl md:text-3xl text-center">
      こんにちは、
      <span>
        しんりう (
        <a
          href={twitter}
          target="_blank"
          className="text-primary hover:opacity-70"
        >
          {TWITTER_ID}
        </a>
        )
      </span>{" "}
      です
    </p>
  );
};

export default TopText;
