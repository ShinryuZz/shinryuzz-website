import PostsFeed from "@/app/_components/home/PostsFeed";
import { getAllPosts } from "@/lib/blog";
import { FieldContents } from "@/@types/types";
import PostLink from "../_components/blog/PostLink";
import { Metadata } from "next";
import { createMetaTitle } from "@/lib/meta";

export const metadata: Metadata = {
  title: createMetaTitle("Blog"),
};

const fetchPostsData = async () => {
  const fields: FieldContents[] = ["title", "date", "slug", "tags"];
  const posts = await getAllPosts(fields);
  return posts;
};

const BlogPage = async () => {
  const posts = await fetchPostsData();

  return (
    <>
      <PostsFeed>
        <>{posts?.map((post) => <PostLink key={post.title} post={post} />)}</>
      </PostsFeed>
    </>
  );
};

export default BlogPage;
