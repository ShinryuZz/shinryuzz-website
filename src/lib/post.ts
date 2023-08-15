import path from "path";
import fs from "fs";

const postDir = path.join(process.cwd(), "/_posts/");

export const getAllPosts = async () => {
  const pathList = fs.readdirSync(postDir);
  const PromiseMetas = pathList.map(async (fileName) => {
    const mdxFile = await import("/_posts/" + fileName);
    const meta = {
      title: mdxFile.meta.title,
      date: mdxFile.meta.date,
      slug: fileName.split(/\.(?=[^.]+$)/)[0],
    };
    return meta;
  });
  const metas = await Promise.all(PromiseMetas);
  // console.log(metas);
  return metas;
};

export const getPostFileNames = () => {
  return fs.readdirSync(postDir).filter((fileName) => /\.mdx$/.test(fileName));
};
