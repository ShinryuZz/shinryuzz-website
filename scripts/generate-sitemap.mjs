import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const WEBSITE_URL = "https://shinryuzz.com";
const LANG = "ja";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.tsx",
    "_posts/*.md",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace(".js", "")
              .replace(".jsx", "")
              .replace("_posts", "/posts")
              .replace("index", "")
              .replace(".md", "");

            let route = path === "/index" ? "" : path;

            const pathLength = path.length;
            if (path[pathLength - 1] === "x") {
              route = path.slice(0, pathLength - 1);
            }

            const lastModifiedDate = new Date(Date.now())
              .toLocaleString(LANG)
              .split(" ")[0]
              .replace(",", "");

            return `
              <url>
                  <loc>${`${WEBSITE_URL}${route}`}</loc>
                  <lastmod>${lastModifiedDate}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>${route === "" ? "1.0" : "0.8"}</priority>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", (await formatted).toString());

  const robotsTxt = `User-agent: * 
Sitemap: ${WEBSITE_URL}/sitemap.xml`;
  writeFileSync("public/robots.txt", robotsTxt);
}

generate();
