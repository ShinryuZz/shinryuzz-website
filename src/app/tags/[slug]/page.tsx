import type { Metadata } from "next";
import { getAllTags, getPostsByTag } from "../../../lib/blog";
import TitleWithUnderline from "../../_components/atoms/TitleWithUnderline";
import PostLink from "../../_components/blog/PostLink";
import { createMetaTitle } from "@/lib/meta";

type Props = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: createMetaTitle("Tag"),
};

const fetchPostsData = async (slug: string) => {
  const posts = getPostsByTag(slug, ["title", "date", "slug", "tags"]);
  return posts;
};

const TagPage = async ({ params }: Props) => {
  const tagName = params.slug;
  const posts = await fetchPostsData(params.slug);

  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <TitleWithUnderline title="Tag" />
        <h2 className="text-xl">#{tagName}</h2>

        <div className="w-full flex flex-col items-start gap-3 mt-3">
          {posts?.map((post) => <PostLink key={post.title} post={post} />)}
        </div>
      </div>
    </>
  );
};

export async function generateStaticParams() {
  const tags = await getAllTags();

  return tags.map((tag) => ({
    slug: tag,
  }));
}

export default TagPage;
