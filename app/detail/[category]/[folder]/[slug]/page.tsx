import DetailHeader from "@/app/detail/DetailHeader";
import DetailContent from "@/app/detail/DetailContent";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import Giscus from "@/app/components/giscus/giscus";

export default function page() {
  const BASE_PATH = "app/post";
  const detail = getPostDetail(BASE_PATH);
  const reference = detail.reference ? detail.reference.split(",") : [];
  return (
    <>
      <DetailHeader title={detail.title} date={detail.date} />
      <DetailContent indexList={reference} postContent={detail} />
      <Giscus />
    </>
  );
}
