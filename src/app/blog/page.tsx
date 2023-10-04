import PostsFeed from "@/app/_components/top/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { FieldContents } from "@/@types/types";
import PageHead from "@/app/_components/layout/PageHead";
import PostLink from "../_components/blog/PostLink";

const fetchPostsData = async () => {
  const fields: FieldContents[] = ["title", "date", "slug", "tags"];
  const posts = await getAllPosts(fields);
  return posts;
};

const BlogPage = async () => {
  const posts = await fetchPostsData();

  return (
    <>
      <PageHead title="Blog" />
      <PostsFeed>
        <>{posts?.map((post) => <PostLink key={post.title} post={post} />)}</>
      </PostsFeed>
    </>
  );
};

export default BlogPage;
