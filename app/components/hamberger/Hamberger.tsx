"use client";
import Lottie from "react-lottie-player";
import HambergerLottie from "@/app/lottieJson/Hamberger.json";
import { styled } from "@/styled-system/jsx";
import { useState } from "react";

export default function Hamberger() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isForward, setIsForward] = useState(true); // 정방향/역방향 토글 관리

  const handleClick = () => {
    setIsPlaying(true); // 애니메이션 재생 시작
    setIsForward(!isForward); // 클릭할 때마다 방향 토글
  };

  const handleComplete = () => {
    setIsPlaying(false); // 애니메이션이 완료되면 멈춤
  };
  return (
    <HambergerContainer onClick={handleClick}>
      <Lottie
        animationData={HambergerLottie}
        loop={false} // 애니메이션을 한번만 재생
        play={isPlaying} // 상태에 따라 재생
        direction={isForward ? -1 : 1}
        onComplete={handleComplete} // 애니메이션 완료 시 호출
      />
    </HambergerContainer>
  );
}

const HambergerContainer = styled("div", {
  base: {
    width: "32px",
    height: "32px",
    cursor: "pointer",
  },
});
