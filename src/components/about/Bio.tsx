import React from "react";
import TitleWithUnderline from "../atom/TitleWithUnderline";
import PersonalIcon from "../atom/PersonalIcon";

const Bio = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-10">
      <TitleWithUnderline title="Bio 🧑‍💻" />
      <div className="text-justify">
        熊本生まれ、熊本在住の22歳大学院生。
        <br />
        高専で情報・電子工学を学んだ後に大学編入、大学院進学。
        <br />
        これまで県内外の複数の民間企業にて、Web
        周りを中心に様々な実務開発経験を積む。
        <br />
        現在は大学院で研究に取り組む傍ら、大学発ディープテック・スタートアップにてソフトウェアエンジニアとして従事している。
        <br />
        趣味は筋トレと水泳と読書。桑田佳祐とサザンオールスターズが好き。
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
