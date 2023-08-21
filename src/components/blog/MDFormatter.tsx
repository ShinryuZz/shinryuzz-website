import { PostProps } from "@/@types/types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";

export default function MDFormatter({ post }: PostProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter title={post.title} />
    </div>
  );
}
