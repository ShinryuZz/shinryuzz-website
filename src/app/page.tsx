import type { FieldContents } from "@/@types/types";
import { getAllPosts } from "@/lib/blog";

import PostLink from "./_components/blog/PostLink";
import PostsFeed from "./_components/home/PostsFeed";
import { TopContent } from "./_components/home/TopContent";

const fetchPostsData = async () => {
  const fields: FieldContents[] = ["title", "date", "slug", "tags"];
  const posts = await getAllPosts(fields);
  return posts;
};

const IndexPage = async () => {
  const posts = await fetchPostsData();
  const limit = 8;
  const firstNPosts = posts.slice(0, limit);

  return (
    <>
      <div className="w-full flex flex-col justify-start items-center gap-12 md:gap-16">
        <TopContent />
        <PostsFeed>
          <>
            {firstNPosts?.map((post) => (
              <PostLink key={post.title} post={post} />
            ))}
          </>
        </PostsFeed>
      </div>
    </>
  );
};

export default IndexPage;
