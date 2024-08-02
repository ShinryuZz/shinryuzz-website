export type SocialLink = {
  name: string;
  url: string;
};

export const twitter: string = "https://twitter.com/shinryuzz__";
export const github: string = "https://github.com/shinryuzz";
const facebook: string =
  "https://www.facebook.com/profile.php?id=100012067954842";
const instagram: string = "https://www.instagram.com/shinryuzz__/";
const booklog: string = "https://booklog.jp/users/shinryuzz";
const scrapbox: string = "https://scrapbox.io/shinryuzz";

export const socialLinks: SocialLink[] = [
  { name: "Twitter", url: twitter },
  { name: "Github", url: github },
  { name: "Facebook", url: facebook },
  { name: "Instagram", url: instagram },
  { name: "ブクログ", url: booklog },
  { name: "Scrapbox", url: scrapbox },
];
