import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import { PostProps } from "@/@types/types";

const PostBody = ({ post }: PostProps) => {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
};

export default PostBody;
