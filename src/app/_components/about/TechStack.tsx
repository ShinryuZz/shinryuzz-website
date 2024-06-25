import React from "react";
import TitleWithUnderline from "@/app/_components/atoms/TitleWithUnderline";
import { List, ListItem } from "../atoms/List";

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-8">
      <TitleWithUnderline title="Skills 🕹️" />
      <div className="text-justify">
        Webフロントエンドを中心に、バックエンド,
        インフラまで一貫して設計・開発・運用経験あり。 趣味や研究などで IoT,
        機械学習周りも少しわかる。
      </div>

      <List>
        <ListItem>Javascript/Typescript/Next.js/React.js</ListItem>
        <ListItem>Python/Django/FastAPI</ListItem>
        <ListItem>Go/Gin</ListItem>
        <ListItem>AWS/Google Cloud</ListItem>
        <ListItem>Docker/MySQL/Linux/Raspberry Pi</ListItem>
      </List>
    </div>
  );
};

export default TechStack;
