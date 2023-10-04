import { SPOTIFY_EMBED_ID } from "@/const/constants";
import React from "react";

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

export default SpotifyFrame;
