import React from "react";
// import { personalTwitter } from "@/const/links";
import Image from "next/image";

const PersonalIcon = () => {
  return (
    // <a href={personalTwitter} target="_blank">
    <Image
      className="rounded-full hover:scale-105 duration-150 hover:shadow-lg hover:shadow-red"
      src="/kangaroo-space.png"
      alt="shinryuzz-icon"
      width={240}
      height={240}
    />
    // </a>
  );
};

export default PersonalIcon;
