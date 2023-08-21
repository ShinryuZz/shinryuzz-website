import React from "react";
import Head from "next/head";
import { WEBSITE_NAME } from "@/const/constants";

type Props = {
  title: string;
};

const PageHead = ({ title }: Props) => {
  console.log(title);
  return (
    <Head>
      <title>
        {title} | {WEBSITE_NAME}
      </title>
    </Head>
  );
};

export default PageHead;
