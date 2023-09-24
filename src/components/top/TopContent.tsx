import React from "react";
import { personalTwitter } from "@/const/links";
import LinkWithUnderline from "../atom/LinkWithUnderline";
import PersonalIcon from "../atom/PersonalIcon";
import { TWITTER_ID } from "@/const/constants";

export const TopContent = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center lg:justify-between gap-5">
      <div className="w-full lg:max-w-sm flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Hi there 👋</h1>
        <div className="text-justify w-full lg:max-w-sm">
          <div className="text-lg font-bold mb-1">
            しんりゅう (
            <a
              href={personalTwitter}
              target="_blank"
              className="hover:opacity-70 text-cyan-800"
            >
              {TWITTER_ID}
            </a>
            )
          </div>
          ソフトウェアエンジニアになりたい大学院生。
          <br />
          技術のことから日々の備忘録まで、自由きままに書いたものをここに残していきます。
          <br />
          <LinkWithUnderline href="/about" text="more about me" />
        </div>
      </div>

      <div className="flex w-full md:w-1/3 justify-center">
        <PersonalIcon />
      </div>
    </div>
  );
};

export default TopContent;
