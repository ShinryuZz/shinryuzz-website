import React from "react";
import TitleWithUnderline from "../atoms/TitleWithUnderline";
import SpotifyFrame from "./SpotifyFrame";

const Others = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Others 🪴" />
      <SpotifyFrame />
    </div>
  );
};

export default Others;
