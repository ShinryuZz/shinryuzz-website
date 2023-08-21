import { PostsProps } from "@/@types/types";
import PostsFeed from "@/components/top/PostsFeed";
import React from "react";
import { getAllPosts } from "@/lib/blog";

const BlogPage = ({ posts }: PostsProps) => {
  return <PostsFeed posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "date", "slug", "tags"]);
  return {
    props: { posts },
  };
}

export default BlogPage;
