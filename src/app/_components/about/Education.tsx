import React from "react";

import TitleWithUnderline from "@/app/_components/atoms/TitleWithUnderline";

const Education = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Education 🎓" />
      <ul className="flex flex-col gap-3 list-disc ml-5 text-red">
        <li>
          <span className="text-darker dark:text-light">
            2020年
            <a
              href="https://kumamoto-nct.ac.jp/"
              target="_blank"
              className="hover:opacity-70 break-keep"
            >
              &nbsp;熊本高等専門学校 制御情報システム工学科&nbsp;
            </a>
            卒業
          </span>
        </li>
        <li>
          <span className="text-darker dark:text-light break-keep">
            2023年
            <a
              href="https://www.eng.kumamoto-u.ac.jp/"
              target="_blank"
              className="hover:opacity-70"
            >
              &nbsp;熊本大学 工学部 情報電気工学科&nbsp;
            </a>
            卒業
          </span>
        </li>
        <li>
          <span className="text-darker dark:text-light break-keep">
            現在
            <a
              href="https://www.fast.kumamoto-u.ac.jp/gsst/"
              target="_blank"
              className="hover:opacity-70"
            >
              &nbsp;熊本大学大学院 自然科学教育部 情報電気工学専攻&nbsp;
            </a>
            在学中
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Education;
