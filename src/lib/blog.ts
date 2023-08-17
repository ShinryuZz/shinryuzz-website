import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postDir = join(process.cwd(), "_posts");

type FieledsType = string[]; // TODO:

export const getPostSlugs = () => {
  return fs.readdirSync(postDir);
};

export const getPostBySlug = (fliename: string, fields: FieledsType = []) => {
  const slug = fliename.replace(/\.md$/, "");
  const fullPath = join(postDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items: any = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
};

export const getAllPosts = (fields: FieledsType = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
