import { getPostBySlug, getAllPosts } from "@/lib/blog";
import markdownToHtml from "@/lib/markdownToHtml";
import MDFormatter from "@/app/_components/blog/MDFormatter";
import { FieldContents } from "@/@types/types";
import { Metadata } from "next";
import { WEBSITE_NAME, WEBSITE_URL } from "@/const/constants";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = params.slug;
  const fields: FieldContents[] = ["title"];
  const post = await getPostBySlug(slug, fields);

  return {
    title: post.title,
    openGraph: {
      title: `${post.title} | ${WEBSITE_NAME}`,
      images: [{ url: `${WEBSITE_URL}/og-image.svg` }],
      locale: "ja",
      type: "article",
    },
  };
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
