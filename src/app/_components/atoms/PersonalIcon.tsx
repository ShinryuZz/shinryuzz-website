import Image from "next/image";
import React from "react";

type Props = {
  isShadow?: boolean;
  size?: number;
};

const PersonalIcon = ({ isShadow = true, size = 240 }: Props) => {
  return (
    <Image
      className={`rounded-full  ${
        isShadow
          ? "hover:scale-105 duration-150 hover:shadow-lg hover:shadow-red"
          : ""
      } `}
      priority
      src="/kangaroo-space.png"
      alt="shinryuzz-icon"
      width={size}
      height={size}
    />
  );
};

export default PersonalIcon;
