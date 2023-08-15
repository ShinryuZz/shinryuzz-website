export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  ogImage?: {
    url: string;
  };
  content: string;
};

export type Meta = {
  title: string;
  date: string;
  slug: string;
};
