import React from "react";
import markdownStyles from "./markdown-styles.module.css";
import { Post } from "@/@types/types";

type Props = {
  post: Post;
};

const PostBody = ({ post }: Props) => {
  return (
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
};

export default PostBody;
