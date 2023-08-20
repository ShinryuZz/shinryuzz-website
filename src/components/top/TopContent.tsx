import React from "react";
import Image from "next/image";
import { personalTwitter } from "@/const/links";
import LinkWithUnderline from "../atom/LinkWithUnderline";
import PersonalIcon from "../atom/PersonalIcon";

export const TopContent = () => {
  return (
    <div className="w-full flex flex-wrap items-center md:justify-between gap-5">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Hi, I&apos;m Shinryuzz 👋
        </h1>
        <div className="text-justify max-w-sm">
          高専で情報・電子工学を学んだ後に大学編入。
          <br />
          現在は大学院修士課程の1年生。
          <br />
          ものづくりが大好きで、専攻は電子工学。
          <br />
          ソフトウェアエンジニアとしてキャリアを築いていきたいと思っている。
          <br />
          <div className="mt-2">
            <LinkWithUnderline href="/about" text="more about me" />
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/3 justify-center md:flex-none">
        <PersonalIcon />
      </div>
    </div>
  );
};

export default TopContent;
