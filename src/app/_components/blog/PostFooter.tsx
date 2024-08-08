"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaIcon,
  HatenaShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

import PersonalIcon from "@/app/_components/atoms/PersonalIcon";
import { titles } from "@/const/bio";
import { TWITTER_ID } from "@/const/general";
import { twitter } from "@/const/social-links";

type Props = {
  title: string;
};

const PostFooter = ({ title }: Props) => {
  const path = usePathname();
  const currentURL = (process.env.NEXT_PUBLIC_BASE_URL as string) + path;
  const iconSize = 32;

  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="flex items-center justify-end gap-3">
        <TwitterShareButton url={currentURL} title={title}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
        <FacebookShareButton url={currentURL} title={title}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
        <LineShareButton url={currentURL} title={title}>
          <LineIcon size={iconSize} round />
        </LineShareButton>
        <HatenaShareButton url={currentURL} title={title}>
          <HatenaIcon size={iconSize} round />
        </HatenaShareButton>
      </div>

      <div className="flex flex-wrap gap-5 items-center">
        <PersonalIcon isShadow={false} size={90} />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg">
            しんりゅう &nbsp; (
            <a
              href={twitter}
              target="_blank"
              className="text-primary hover:opacity-70"
            >
              {TWITTER_ID}
            </a>
            )
          </p>
          <p>{titles.join(" / ")}</p>
          <Link href="/about" className="text-primary hover:opacity-70">
            more about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
