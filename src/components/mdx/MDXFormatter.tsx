import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import { Heading, Text, UnorderedList } from "./mdx-components";

interface MDXFormatterProps {
  children: React.ReactNode;
  meta: {
    author: string;
    title: string;
    slug: string;
    topics: string[];
    date: string;
  };
}
const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Text,
  ul: UnorderedList,
};

function MDXFormatter({ children, ...props }: MDXFormatterProps) {
  return (
    <MDXProvider components={components}>
      <div className="sm:w-2/3 mx-5 my-10 flex flex-col items-center justify-start gap-8">
        <Head>
          <title>{props.meta.title}</title>
          <meta name="description" content={props.meta.title} />
          {/* TODO: Headタグを用いてOGPに対応する */}
        </Head>

        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-3xl font-bold">{props.meta.title}</h1>
          <div>
            <p className="text-md text-dark-300">
              By {props.meta.author}, {props.meta.date}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {props.meta.topics.map((topic) => (
              <span
                key={topic}
                className="text-sm text-darker-500 bg-light rounded-full px-2 py-1"
              >
                {topic.slice(0, 1).toUpperCase() + topic.slice(1)}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full border-b border-darker-500"></div>
        <div className="mx-3">{children}</div>
      </div>
    </MDXProvider>
  );
}

export default MDXFormatter;
