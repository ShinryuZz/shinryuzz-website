import React from "react";
import { Post } from "@/@types/types";
import Link from "next/link";
import PostLink from "../blog/PostLink";

type Props = {
  posts: Post[];
};

const PostsFeed = ({ posts }: Props) => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-10">
      <h1 className="text-2xl sm:text-3xl py-1 border-b-2 border-red-800 mb-2">
        Blog
      </h1>
      <div className="flex flex-col items-start gap-3">
        {posts?.map((post) => (
          <PostLink key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsFeed;
