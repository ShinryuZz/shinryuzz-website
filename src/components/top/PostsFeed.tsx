import React from "react";
import { Post } from "@/@types/types";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const PostsFeed = ({ posts }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 my-10">
      <h1 className="text-2xl border-b border-red-800">最近の記事</h1>
      {posts?.map((post) => (
        <div key={post.title}>
          <Link href={`/blog/${post.slug}`}>
            {post.title} | {post.slug} |{post.date}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsFeed;
