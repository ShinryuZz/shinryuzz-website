import { Post } from "@/@types/types";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

const PostLine = ({ post }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start gap-3">
        <span className=" text-cyan-700">{post.date}</span>

        {post.tags?.map((tag) => (
          <Link href={"/"} key={tag} className="text-pink-400 rounded-md ">
            {`#${tag}`}
          </Link>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        key={post.title}
        className="flex flex-col hover:opacity-70"
      >
        {post.title}{" "}
      </Link>
    </div>
  );
};

export default PostLine;
