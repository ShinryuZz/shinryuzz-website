import type { PostProps } from "@/@types/types";

import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function MDFormatter({ post }: PostProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter title={post.title} />
    </div>
  );
}
