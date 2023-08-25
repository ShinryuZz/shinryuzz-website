import TopContent from "@/components/top/TopContent";
import PostsFeed from "@/components/top/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { FieldContents, PostsProps } from "@/@types/types";
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
  const fields: FieldContents[] = ["title", "date", "slug", "tags"];
  const posts = await getAllPosts(fields);
  return {
    props: { posts },
  };
}
