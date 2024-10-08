import DetailHeader from "@/app/detail/DetailHeader";
import DetailContent from "@/app/detail/DetailContent";
import fs from "fs";
import matter from "gray-matter";

export default function page() {
  return (
    <>
      <DetailHeader title={""} date={""} />
      <DetailContent indexList={[]} postContent={""} />
    </>
  );
}
