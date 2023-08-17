import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/blog";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import MDFormatter from "../../components/blog/MDFormatter";

type Props = {
  post: any;
  morePosts: any;
  preview: any;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <article className="mb-32">
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>

        <MDFormatter content={post.content} />
      </article>
    </>
  );
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
