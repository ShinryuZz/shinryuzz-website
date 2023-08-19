import React from "react";
import Image from "next/image";
import { personalTwitter } from "@/const/links";
import Link from "next/link";

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
            <Link
              href="/about"
              className="text-cyan-800  border-b border-cyan-800 pb-1 hover:opacity-70"
            >
              more about me
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/3 justify-center md:flex-none">
        <a href={personalTwitter} target="_blank">
          <Image
            className="rounded-full hover:scale-105 duration-150 hover:shadow-lg hover:shadow-red"
            src="/kangaroo-space.png"
            alt="shinryuzz-icon"
            width={240}
            height={240}
          />
        </a>
      </div>
    </div>
  );
};

export default TopContent;
