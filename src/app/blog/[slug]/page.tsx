import Head from "next/head";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import markdownToHtml from "@/lib/markdownToHtml";
import MDFormatter from "@/app/_components/blog/MDFormatter";
import { FieldContents } from "@/@types/types";

type Props = {
  params: { slug: string };
};

const fetchPostData = async (slug: string) => {
  const fields: FieldContents[] = ["title", "date", "slug", "content", "tags"];
  const post = await getPostBySlug(slug, fields);
  const content = await markdownToHtml(post.content || "");

  return {
    post: {
      ...post,
      content,
    },
  };
};

const ArticleDetailPage = async ({ params }: Props) => {
  const post = await fetchPostData(params.slug);

  return (
    <>
      <article className="mb-32">
        <Head>
          <title>{post.post.title}</title>
          <meta property="og:image" content={post.post.ogImage?.url} />
        </Head>
        <MDFormatter post={post.post} />
      </article>
    </>
  );
};

export async function generateStaticParams() {
  const posts = await getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default ArticleDetailPage;
