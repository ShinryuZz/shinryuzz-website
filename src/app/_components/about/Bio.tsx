import React from "react";
import TitleWithUnderline from "../atoms/TitleWithUnderline";
import PersonalIcon from "../atoms/PersonalIcon";

const Bio = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Bio 🧑‍💻" />
      <div className="text-justify">
        熊本県出身の23歳大学院生。
        <br />
        高専で情報・電子工学を学んだ後に大学編入、大学院進学。
        <br />
        高専時代からのものづくり経験に加えて、Web技術周りを中心に様々な実務開発経験を積む。
        <br />
        現在は大学院で研究に取り組む傍ら、大学発ディープテック・スタートアップにてソフトウェアエンジニアとして従事している。
        <br />
        趣味はギターと読書。Suchmosとサザンオールスターズが好き。
        <br />
      </div>

      <div className="w-full flex flex-col items-center mt-5">
        <PersonalIcon />
        <p className="mt-5">僕のアイコン: キーボードを弾くカンガルー</p>
      </div>
    </div>
  );
};

export default Bio;
