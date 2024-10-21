import HeaderTop from "@/app/components/mainHeader/HeaderTop";
import AllPosts from "@/app/components/allPosts/AllPosts";

export default async function page() {
  return (
    <>
      <HeaderTop />
      <AllPosts />
    </>
  );
}
