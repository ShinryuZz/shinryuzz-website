import Head from "next/head";
import { WEBSITE_NAME } from "@/const/constants";

type Props = {
  title: string;
};

const PageHead = ({ title }: Props) => {
  return (
    <Head>
      <title>
        {title} | {WEBSITE_NAME}
      </title>
    </Head>
  );
};

export default PageHead;
