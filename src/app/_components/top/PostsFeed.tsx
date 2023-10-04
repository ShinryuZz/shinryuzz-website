"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import TitleWithUnderline from "../atoms/TitleWithUnderline";
import LinkWithUnderline from "../atoms/LinkWithUnderline";

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
