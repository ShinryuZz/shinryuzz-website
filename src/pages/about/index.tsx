import React from "react";
import SocialLinks from "@/components/about/SocialLinks";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import TopText from "@/components/about/TopText";
import PageHead from "@/components/layout/PageHead";
import Others from "@/components/about/Others";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About" />
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
