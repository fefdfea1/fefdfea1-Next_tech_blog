import DetailHeader from "@/app/detail/DetailHeader";
import DetailContent from "@/app/detail/DetailContent";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import { getPostPaths } from "@/app/fetch/getAllMdx/getPostPaths";
import Giscus from "@/app/components/giscus/giscus";

type propsType = {
  params: {
    category: string;
    slug: string;
  };
};

export default function page(props: propsType) {
  const postPath = getPostPaths("", props.params.slug);
  const detail = getPostDetail(postPath[0]);
  const reference = detail.reference ? detail.reference.split(",") : [];
  return (
    <>
      <DetailHeader title={detail.title} date={detail.date} />
      <DetailContent indexList={reference} postContent={detail} />
      <Giscus />
    </>
  );
}
