import { WEBSITE_NAME } from "@/const/constants";

export const createMetaTitle = (path: string): string => {
  return `${path} | ${WEBSITE_NAME}`;
};
