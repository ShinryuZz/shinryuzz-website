import React from "react";

import { SPOTIFY_EMBED_ID } from "@/const/general";

import TitleWithUnderline from "../atoms/TitleWithUnderline";

const SpotifyFrame = () => {
  return (
    <iframe
      src={SPOTIFY_EMBED_ID}
      width="100%"
      height="160"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

const SpotifyCard = () => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Masterpiece 💿" />
      <SpotifyFrame />
    </div>
  );
};

export default SpotifyCard;
