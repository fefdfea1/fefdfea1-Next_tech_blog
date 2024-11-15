import DetailHeader from "@/app/detail/DetailHeader";
import DetailContent from "@/app/detail/DetailContent";
import { getPostDetail } from "@/app/fetch/getAllMdx/detailPost";
import Giscus from "@/app/components/giscus/giscus";

type propsType = {
  params: {
    category: string;
    folder: string;
    slug: string;
  };
};

export default async function page(path: propsType) {
  const BASE_PATH = "app/mdxPost";
  const detail = await getPostDetail(
    `${BASE_PATH}/${path.params.category}/${path.params.folder}/${path.params.slug}.mdx`,
  );
  const reference = detail.reference ? detail.reference.split(",") : [];
  return (
    <>
      <DetailHeader title={detail.title} date={detail.date} />
      <DetailContent indexList={reference} postContent={detail} />
      <Giscus />
    </>
  );
}
