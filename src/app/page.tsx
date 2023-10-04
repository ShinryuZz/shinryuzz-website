import TopContent from "./_components/top/TopContent";
import PostsFeed from "./_components/top/PostsFeed";
import PageHead from "./_components/layout/PageHead";
import PostLink from "./_components/blog/PostLink";
import { getAllPosts } from "@/lib/blog";
import { FieldContents } from "@/@types/types";

const fetchPostsData = async () => {
  const fields: FieldContents[] = ["title", "date", "slug", "tags"];
  const posts = await getAllPosts(fields);
  return posts;
};

const IndexPage = async () => {
  const posts = await fetchPostsData();

  return (
    <>
      <PageHead title="Home" />
      <div className="w-full flex flex-col justify-start items-center gap-12 md:gap-16">
        <TopContent />
        <PostsFeed>
          <>{posts?.map((post) => <PostLink key={post.title} post={post} />)}</>
        </PostsFeed>
      </div>
    </>
  );
};

export default IndexPage;
