import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse) // markdown -> mdast の変換
    .use(remarkRehype) // mdast -> hast の変換
    .use(rehypeStringify) // hast -> html の変換
    .use(rehypePrism) // prism の追加 (diffや行番号も)
    .use(rehypeCodeTitles) // ファイル名表示の追加
    .process(markdown); // 実行
  return result.toString();
}
