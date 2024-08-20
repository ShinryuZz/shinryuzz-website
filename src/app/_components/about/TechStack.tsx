import React from "react";

import TitleWithUnderline from "@/app/_components/atoms/TitleWithUnderline";
import { skillDescription, skills } from "@/const/skills";

import { List, ListItem } from "../atoms/SimpleList";

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-8">
      <TitleWithUnderline title="Tech Stack 🕹️" />
      <div className="text-justify">
        {skillDescription.split("\n").map((text, index) => (
          <div key={index}>{text}</div>
        ))}
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
