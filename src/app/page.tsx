import TopContent from "./_components/home/TopContent";
import PostsFeed from "./_components/home/PostsFeed";
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
