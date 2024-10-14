import { styled } from "@/styled-system/jsx";
import HeaderTop from "@/app/components/mainHeader/HeaderTop";
import HeaderMain from "@/app/components/mainHeader/HeaderMain";

export default function MainHeader() {
  return (
    <Header>
      <HeaderTop />
      <HeaderMain />
    </Header>
  );
}
const Header = styled("div", {
  base: {
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundImage: "url('/img/headerBg/bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    "& img": {
      width: "100%",
      height: "100%",
      display: "flex",
      objectFit: "cover",
    },
  },
});
