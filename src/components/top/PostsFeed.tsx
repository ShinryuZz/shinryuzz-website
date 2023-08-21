import React from "react";
import { PostsProps } from "@/@types/types";
import PostLink from "../blog/PostLink";
import TitleWithUnderline from "../atom/TitleWithUnderline";
import LinkWithUnderline from "../atom/LinkWithUnderline";
import { useRouter } from "next/router";

const PostsFeed = ({ posts }: PostsProps) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <div className="w-full flex flex-col items-start gap-4 my-10">
      <TitleWithUnderline title="Blog 📋" />
      <div className="w-full flex flex-col items-start gap-3">
        {posts?.map((post) => (
          <PostLink key={post.title} post={post} />
        ))}
      </div>
      {pathname !== "/blog" && (
        <LinkWithUnderline href="/blog" text="see all posts" />
      )}
    </div>
  );
};

export default PostsFeed;
