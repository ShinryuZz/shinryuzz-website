import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post, PostFields } from "@/@types/types";

const postDir = join(process.cwd(), "_posts");

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postDir);
};

export const getPostBySlug = (
  fliename: string,
  fields: PostFields = []
): Post => {
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
    if (field && data[field]) {
      items[field] = data[field];
    }
  });
  return items;
};

export const getAllPosts = async (fields: PostFields = []): Promise<Post[]> => {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  );
  return posts;
};
