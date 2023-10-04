import { getAllTags, getPostsByTag } from "../../../lib/blog";
import PageHead from "../../_components/layout/PageHead";
import TitleWithUnderline from "../../_components/atoms/TitleWithUnderline";
import PostLink from "../../_components/blog/PostLink";

type Props = {
  params: { slug: string };
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
      <PageHead title={tagName} />
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
