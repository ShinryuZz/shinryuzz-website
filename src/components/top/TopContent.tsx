import React from "react";
import { personalTwitter } from "@/const/links";
import LinkWithUnderline from "../atom/LinkWithUnderline";
import PersonalIcon from "../atom/PersonalIcon";
import { TWITTER_ID } from "@/const/constants";

export const TopContent = () => {
  return (
    <div className="w-full flex flex-wrap items-center md:justify-between gap-5">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Hi there 👋</h1>
        <div className="text-justify max-w-sm">
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
          高専で情報・電子工学を学んだ後に大学編入。
          <br />
          現在は大学院修士課程の1年生。
          <br />
          これまでソフトウェアエンジニアとして、様々なサービス開発に携わる。
          <br />
          技術のことや日々の備忘録など、自由に書いたものをここに残していきます。
          <br />
          <LinkWithUnderline href="/about" text="more about me" />
        </div>
      </div>

      <div className="flex w-full md:w-1/3 justify-center md:flex-none">
        <PersonalIcon />
      </div>
    </div>
  );
};

export default TopContent;
