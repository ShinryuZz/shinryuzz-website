import { Post } from "@/@types/types";
import PostsFeed from "@/components/top/PostsFeed";
import React from "react";
import { getAllPosts } from "@/lib/blog";

type Props = {
  posts: Post[];
};

const BlogPage = ({ posts }: Props) => {
  return <PostsFeed posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getAllPosts(["title", "date", "slug", "tags"]);
  return {
    props: { posts },
  };
}

export default BlogPage;
