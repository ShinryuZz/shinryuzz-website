import { PostProps } from "@/@types/types";
import React from "react";
import TagsListWithSharp from "../atom/TagsListWithSharp";

const PostHeader = ({ post }: PostProps) => {
  return (
    <div className="w-full flex flex-col items-start gap-2 text-lg mb-10">
      <h1 className="md:text-3xl text-2xl font-bold mt-10">{post.title}</h1>
      <TagsListWithSharp tags={post.tags} />
      <div>最終更新日: {post.date}</div>
    </div>
  );
};

export default PostHeader;
