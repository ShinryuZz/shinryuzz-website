import TopContent from "@/components/top/TopContent";
import PostsFeed from "@/components/top/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { Post } from "@/@types/types";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  // console.log("posts", posts);
  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      <TopContent />
      <PostsFeed posts={posts} />
      <div className="stars"></div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "date", "slug", "tags"]);
  return {
    props: { posts },
  };
}
