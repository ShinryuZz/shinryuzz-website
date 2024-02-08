import SocialLinks from "../_components/about/SocialLinks";
import Bio from "../_components/about/Bio";
import Education from "../_components/about/Education";
import TopText from "../_components/about/TopText";
import Others from "../_components/about/Others";
import type { Metadata } from "next";
import { createMetaTitle } from "@/lib/meta";

export const metadata: Metadata = {
  title: createMetaTitle("About"),
};

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 md:gap-16">
        <TopText />
        <Bio />
        <SocialLinks />
        <Education />
        <Others />
      </div>
    </>
  );
};

export default AboutPage;
