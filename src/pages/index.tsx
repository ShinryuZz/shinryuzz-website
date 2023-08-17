import TopContent from "@/components/top/TopContent";
import PostsFeed from "@/components/top/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { Post } from "@/@types/types";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  console.log("posts", posts);
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <TopContent />
      <PostsFeed posts={posts} />
      <div className="stars"></div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug"]);
  return {
    props: { posts },
  };
}
