import { Post } from "@/@types/types";
import React from "react";

type Props = {
  post: Post;
};

const PostHeader = ({ post }: Props) => {
  return (
    <div className="w-full flex flex-col items-start gap-2 text-lg">
      <h1 className="text-3xl font-bold mt-10">{post.title}</h1>

      <div>最終更新日: {post.date}</div>
    </div>
  );
};

export default PostHeader;
