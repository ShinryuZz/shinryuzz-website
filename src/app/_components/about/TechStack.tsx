import React from "react";

import TitleWithUnderline from "@/app/_components/atoms/TitleWithUnderline";
import { skills } from "@/const/skills";

import { List, ListItem } from "../atoms/SimpleList";

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-8">
      <TitleWithUnderline title="Teck Stack 🕹️" />
      <div className="text-justify">
        Webフロントエンドを中心に、バックエンド、
        インフラまで一貫して設計・開発・運用経験があります。
      </div>

      <List>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default TechStack;
