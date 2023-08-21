import { Post } from "@/@types/types";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostBody from "./PostBody";

type Props = {
  post: Post;
};

export default function MDFormatter({ post }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter title={post.title} />
    </div>
  );
}
