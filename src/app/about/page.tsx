import type { Metadata } from "next";
import { createMetaTitle } from "@/lib/meta";

import TopText from "../_components/about/TopText";
import Bio from "../_components/about/Bio";
import SocialLinks from "../_components/about/SocialLinks";
import TechStack from "../_components/about/TechStack";
import SpotifyCard from "../_components/about/SpotifyCard";

export const metadata: Metadata = {
  title: createMetaTitle("About"),
};

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12">
        <TopText />
        <Bio />
        <SocialLinks />
        <TechStack />
        <SpotifyCard />
      </div>
    </>
  );
};

export default AboutPage;
