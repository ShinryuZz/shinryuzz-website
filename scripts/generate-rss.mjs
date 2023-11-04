import { writeFileSync } from "fs";
import RSS from "rss";
import { globby } from "globby";
import fs from "fs";
import matter from "gray-matter";

const WEBSITE_TITLE = "shinryuzz's website";
const WEBSITE_URL = "https://shinryuzz.com";

async function generate() {
  const allBlogs = await globby(["_posts/*.md"]);

  const feed = new RSS({
    title: WEBSITE_TITLE,
    site_url: WEBSITE_URL,
    feed_url: `${WEBSITE_URL}/feed.xml`,
  });

  allBlogs.map((post) => {
    const fileContents = fs.readFileSync(post, "utf8");
    const { data } = matter(fileContents);
    const slug = post.replace("_posts", "/posts").replace(".md", "");
    feed.item({
      title: data.title,
      url: `${WEBSITE_URL}${slug}`,
      date: data.date,
      description: data.excerpt,
    });
  });

  writeFileSync("public/feed.xml", feed.xml({ indent: true }));
}

generate();
