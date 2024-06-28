"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import LinkWithUnderline from "../atoms/LinkWithUnderline";
import TitleWithUnderline from "../atoms/TitleWithUnderline";

type PostsProps = {
  children: ReactNode;
};

const PostsFeed = ({ children }: PostsProps) => {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <TitleWithUnderline title="Blog 📋" />
      <div className="w-full flex flex-col items-start gap-3">{children}</div>
      {pathname !== "/blog" && (
        <LinkWithUnderline href="/blog" text="see all posts" />
      )}
    </div>
  );
};

export default PostsFeed;
