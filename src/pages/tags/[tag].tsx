import { Post } from "@/@types/types";
import { getAllTags, getPostsByTag } from "../../lib/blog";
import PageHead from "@/components/layout/PageHead";
import TitleWithUnderline from "@/components/atom/TitleWithUnderline";
import PostLink from "@/components/blog/PostLink";

type Props = {
  posts: Post[];
  tag: string;
};

export default function Index({ posts, tag }: Props) {
  return (
    <>
      <PageHead title={tag} />
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <TitleWithUnderline title="Tag" />
        <h2 className="text-xl">#{tag}</h2>

        <div className="w-full flex flex-col items-start gap-3 mt-3">
          {posts?.map((post) => (
            <PostLink key={post.title} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

type Params = {
  params: {
    tag: string;
  };
};

export const getStaticProps = ({ params }: Params) => {
  const posts = getPostsByTag(params.tag, ["title", "date", "slug", "tags"]);

  return {
    props: {
      posts: posts,
      tag: params.tag,
    },
  };
};

export const getStaticPaths = async () => {
  const tags = await getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
};
