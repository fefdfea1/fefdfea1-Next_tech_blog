import LastestPost from "@/app/components/main/lastestPost/LastestPost";
import HelperContainer from "@/app/components/main/developHelper/HelperContainer";
import { styled } from "@/styled-system/jsx";

export default async function Main() {
  return (
    <LastPostBox>
      <LastestPost />
      <HelperContainer />
    </LastPostBox>
  );
}

const LastPostBox = styled("div", {
  base: {
    "& img": {
      width: "100%",
      height: "100%",
      display: "flex",
      objectFit: "cover",
    },
  },
});
