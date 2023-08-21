import { PostsProps } from "@/@types/types";
import PostsFeed from "@/components/top/PostsFeed";
import React from "react";
import { getAllPosts } from "@/lib/blog";
import PageHead from "@/components/layout/PageHead";

const BlogPage = ({ posts }: PostsProps) => {
  return (
    <>
      <PageHead title="Blog" />
      <PostsFeed posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "date", "slug", "tags"]);
  return {
    props: { posts },
  };
}

export default BlogPage;
