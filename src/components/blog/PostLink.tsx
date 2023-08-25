import { PostProps } from "@/@types/types";
import Link from "next/link";
import React from "react";
import TagsListWithSharp from "../atom/TagsListWithSharp";

const PostLink = ({ post }: PostProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <Link
        href={`/blog/${post.slug}`}
        key={post.title}
        className="hover:opacity-70"
      >
        <span className="hover:underline">{post.title}</span>
      </Link>
      <div className="flex justify-between flex-wrap">
        <TagsListWithSharp tags={post.tags} />
        <span className=" text-cyan-800">{post.date}</span>
      </div>
    </div>
  );
};

export default PostLink;
