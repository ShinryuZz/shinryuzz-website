import React from "react";

import type { PostProps } from "@/@types/types";

import markdownStyles from "./markdown-styles.module.css";

const PostBody = ({ post }: PostProps) => {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
};

export default PostBody;
