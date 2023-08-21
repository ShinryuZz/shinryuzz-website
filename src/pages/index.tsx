import TopContent from "@/components/top/TopContent";
import PostsFeed from "@/components/top/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { PostsProps } from "@/@types/types";
import PageHead from "@/components/layout/PageHead";

export default function Home({ posts }: PostsProps) {
  // console.log("posts", posts);
  return (
    <>
      <PageHead title="Home" />
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <TopContent />
        <PostsFeed posts={posts} />
        <div className="stars"></div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "date", "slug", "tags"]);
  return {
    props: { posts },
  };
}
