export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  ogImage?: {
    url: string;
  };
  content: string;
  tags: string[];
};

export type FieldContents =
  | "slug"
  | "title"
  | "date"
  | "author"
  | "ogImage"
  | "content"
  | "tags";

export type PostFields = Array<FieldContents | null>;

export type Meta = {
  title: string;
  date: string;
  slug: string;
};

export type PostProps = {
  post: Post;
};

export type PostsProps = {
  posts: Post[];
};
