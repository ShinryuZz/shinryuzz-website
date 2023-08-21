import React from "react";
// import { personalTwitter } from "@/const/links";
import Image from "next/image";

type Props = {
  isShadow?: boolean;
  size: number;
};

const PersonalIcon = ({ isShadow = true, size = 240 }: Props) => {
  return (
    // <a href={personalTwitter} target="_blank">
    <Image
      className={`rounded-full  ${
        isShadow
          ? "hover:scale-105 duration-150 hover:shadow-lg hover:shadow-red"
          : ""
      } `}
      src="/kangaroo-space.png"
      alt="shinryuzz-icon"
      width={size}
      height={size}
    />
    // </a>
  );
};

export default PersonalIcon;
