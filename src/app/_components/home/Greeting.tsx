import React from "react";

import { titles } from "@/const/bio";
import { TWITTER_ID } from "@/const/general";
import { twitter } from "@/const/social-links";

import LinkWithUnderline from "../atoms/LinkWithUnderline";
import PersonalIcon from "../atoms/PersonalIcon";

export const Greeting = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center lg:justify-between gap-5">
      <div className="w-full lg:max-w-sm flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Hi there 👋</h1>
        <div className="flex flex-col text-justify lg:max-w-sm gap-2">
          <div className="text-lg font-bold mb-">
            しんりう (
            <a
              href={twitter}
              target="_blank"
              className="hover:opacity-70 text-primary"
            >
              {TWITTER_ID}
            </a>
            )
          </div>
          <p>{titles.join(" / ")}</p>
          <div>
            <LinkWithUnderline href="/about" text="more about me" />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/3 justify-center">
        <PersonalIcon />
      </div>
    </div>
  );
};

export default Greeting;
