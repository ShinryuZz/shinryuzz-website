import React from "react";
import SocialLinks from "@/components/about/SocialLinks";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import TopText from "@/components/about/TopText";

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <TopText />
      <Bio />
      <SocialLinks />
      <Education />
    </div>
  );
};

export default AboutPage;
