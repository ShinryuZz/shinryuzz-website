import Link from "next/link";
import React from "react";

type Props = {
  tags: string[];
};

const TagsListWithSharp = ({ tags }: Props) => {
  return (
    <div className="flex items-center justify-start flex-wrap ">
      {tags?.map((tag) => (
        <Link
          href={`/tags/${tag}`}
          key={tag}
          className="text-secondary hover:opacity-70 hover:underline mr-3"
        >
          {`#${tag}`}
        </Link>
      ))}
    </div>
  );
};

export default TagsListWithSharp;
