import { Post } from "@/@types/types";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const PostLink = ({ post }: Props) => {
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
        <div className="flex items-center justify-start flex-wrap ">
          {post.tags?.map((tag) => (
            <Link
              href={"/"}
              key={tag}
              className="text-pink-400 hover:opacity-70 hover:underline mr-3"
            >
              {`#${tag}`}
            </Link>
          ))}
        </div>
        <span className=" text-cyan-800">{post.date}</span>
      </div>
    </div>
  );
};

export default PostLink;
