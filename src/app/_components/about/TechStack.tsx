import React from "react";
import TitleWithUnderline from "@/app/_components/atoms/TitleWithUnderline";
import { List, ListItem } from "../atoms/SimpleList";

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-8">
      <TitleWithUnderline title="Skills 🕹️" />
      <div className="text-justify">
        Webフロントエンドを中心に、バックエンド,
        インフラまで一貫して設計・開発・運用経験があります。
      </div>

      <List>
        <ListItem>
          Javascript/Typescript/Next.js/React.js/Vue.js/D3.js/Deck.gl
        </ListItem>
        <ListItem>Python/Django/FastAPI</ListItem>
        <ListItem>Go/Gin</ListItem>
        <ListItem>PHP/Laravel</ListItem>
        <ListItem>AWS/Google Cloud</ListItem>
        <ListItem>Docker/MySQL/Linux/Raspberry Pi</ListItem>
      </List>
    </div>
  );
};

export default TechStack;
