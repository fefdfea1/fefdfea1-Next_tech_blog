import MainHeader from "@/app/components/mainHeader/MainHeader";
import LastestPost from "@/app/components/lastestPost/LastestPost";
import HelperContainer from "@/app/components/developHelper/HelperContainer";

export default function page() {
  return (
    <>
      <MainHeader />
      <LastestPost />
      <HelperContainer />
    </>
  );
}
