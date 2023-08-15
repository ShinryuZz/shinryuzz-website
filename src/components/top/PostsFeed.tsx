import React from "react";
import { Meta } from "@/@types/types";

type Props = {
  metas: Meta[];
};

const PostsFeed = ({ metas }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 my-10">
      <h1 className="text-2xl">最近の記事</h1>
      {metas?.map((meta) => (
        <div key={meta.title}>
          {meta.title} | {meta.slug} | {meta.date}
        </div>
      ))}
    </div>
  );
};

export default PostsFeed;
