import markdownStyles from "./markdown-styles.module.css";

export default function MDFormatter({ content }: { content: string }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
