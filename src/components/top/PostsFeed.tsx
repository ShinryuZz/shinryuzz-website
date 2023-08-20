import React from "react";
import { Post } from "@/@types/types";
import PostLink from "../blog/PostLink";
import TitleWithUnderline from "../atom/TitleWithUnderline";
import LinkWithUnderline from "../atom/LinkWithUnderline";

type Props = {
  posts: Post[];
};

const PostsFeed = ({ posts }: Props) => {
  return (
    <div className="w-full flex flex-col items-start gap-4 my-10">
      <TitleWithUnderline title="Blog 📋" />
      <div className="flex flex-col items-start gap-3">
        {posts?.map((post) => (
          <PostLink key={post.title} post={post} />
        ))}
      </div>
      <LinkWithUnderline href="/blog" text="see all posts" />
    </div>
  );
};

export default PostsFeed;
