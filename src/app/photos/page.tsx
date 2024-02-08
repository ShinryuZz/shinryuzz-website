import Wip from "@/app/_components/layout/Wip";
import type { Metadata } from "next";
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
