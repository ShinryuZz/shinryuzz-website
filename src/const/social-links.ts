export type SocialLink = {
  name: string;
  url: string;
};

export const personalTwitter: string = "https://twitter.com/shinryuzz__";
export const personalGithub: string = "https://github.com/shinryuzz";
export const personalFacebook: string =
  "https://www.facebook.com/profile.php?id=100012067954842";
export const personalInstagram: string =
  "https://www.instagram.com/shinryuzz__/";
export const personalBooklog: string = "https://booklog.jp/users/shinryuzz";

export const socialLinks: SocialLink[] = [
  { name: "Twitter", url: personalTwitter },
  { name: "Github", url: personalGithub },
  { name: "Facebook", url: personalFacebook },
  { name: "Instagram", url: personalInstagram },
  { name: "ブクログ", url: personalBooklog },
];
