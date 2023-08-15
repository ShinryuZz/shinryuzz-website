import React from "react";
import Image from "next/image";
import { personalTwitter } from "@/const/links";

const TopContent = () => {
  return (
    <>
      <h1 className="text-xl sm:text-3xl">
        Welcome to shinryuzz&apos;s website 👋
      </h1>
      <h2 className="text-lg sm:text-xl">
        こんにちは、<span>しんりゅう</span> です
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="text-justify">
          高専で情報・電子工学を学んだ後に大学編入。
          <br />
          現在は大学院修士課程の1年生。
          <br />
          ものづくりが大好きで、専攻は電子工学。
          <br />
          ソフトウェアエンジニアとしてキャリアを築いていきたいと思っている。
        </div>
        <a href={personalTwitter} target="_blank">
          <Image
            className="rounded-full hover:scale-105 duration-150 hover:shadow-lg hover:shadow-red"
            src="/kangaroo-space.png"
            alt="shinryuzz-icon"
            width={200}
            height={200}
          />
        </a>
      </div>
    </>
  );
};

export default TopContent;
