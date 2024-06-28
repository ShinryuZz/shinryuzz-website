import type { Metadata } from "next";

import Wip from "@/app/_components/layout/Wip";
import { createMetaTitle } from "@/lib/meta";

export const metadata: Metadata = {
  title: createMetaTitle("Photos"),
};

const PhotosPage = () => {
  return (
    <>
      <Wip />
    </>
  );
};

export default PhotosPage;
