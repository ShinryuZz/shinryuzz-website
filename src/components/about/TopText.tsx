import React from "react";
import { personalTwitter } from "@/const/links";
import { TWITTER_ID } from "@/const/constants";

const TopText = () => {
  return (
    <p className="text-3xl">
      こんにちは、松岡 伸龍 (
      <a
        href={personalTwitter}
        target="_blank"
        className="text-cyan-800 hover:opacity-70"
      >
        {TWITTER_ID}
      </a>
      ) です
    </p>
  );
};

export default TopText;
