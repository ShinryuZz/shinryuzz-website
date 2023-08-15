import TopContent from "@/components/top/TopContent";
import PostsFeed from "@/components/top/PostsFeed";
import { Meta } from "@/@types/types";
import { getAllPosts } from "@/lib/post";

type Props = {
  metas: Meta[];
};

export default function Home({ metas }: Props) {
  console.log(metas);
  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <TopContent />
      <PostsFeed metas={metas} />
      <div className="stars"></div>
    </div>
  );
}

export const getStaticProps = async () => {
  const metas = await getAllPosts();
  return { props: { metas: metas } };
};
