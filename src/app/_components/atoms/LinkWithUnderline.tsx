import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

const LinkWithUnderline = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className="text-cyan-800  border-b border-cyan-800 pb-1 hover:opacity-70"
    >
      {text} &gt;
    </Link>
  );
};

export default LinkWithUnderline;
