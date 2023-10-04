import React from "react";

type Props = {
  title: string;
};

const TitleWithUnderline = ({ title }: Props) => {
  return (
    <h1 className="text-2xl sm:text-3xl py-1 border-b-2 border-red-800 mb-2">
      {title}
    </h1>
  );
};

export default TitleWithUnderline;
