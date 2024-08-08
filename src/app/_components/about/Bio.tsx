import React from "react";

import { bioText, bioIconDesc } from "@/const/bio";

import PersonalIcon from "../atoms/PersonalIcon";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

const Bio = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Bio 📋" />
      <div className="text-justify">
        {bioText.split("\n").map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center mt-5 gap-5">
        <PersonalIcon />
        <p>{bioIconDesc}</p>
      </div>
    </div>
  );
};

export default Bio;
