import React from "react";
import { personalTwitter } from "@/const/links";
import { TWITTER_ID } from "@/const/constants";

const TopText = () => {
  return (
    <p className="text-2xl md:text-3xl text-center">
      こんにちは、
      <span>
        松岡 伸龍 (
        <a
          href={personalTwitter}
          target="_blank"
          className="text-cyan-800 hover:opacity-70"
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
