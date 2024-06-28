import { WEBSITE_NAME } from "@/const/general";

export const createMetaTitle = (path: string): string => {
  return `${path} | ${WEBSITE_NAME}`;
};
