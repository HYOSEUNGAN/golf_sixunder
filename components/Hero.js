"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    // About 섹션으로 스크롤
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 네이버 지도로 이동하는 함수 추가
  const handleReservation = () => {
    window.open(
      "https://map.naver.com/p/entry/place/1852175573?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1873896&lat=37.7121230&c=17.36,0,0,0,dh",
      "_blank"
    );
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/풀스윙1.jpeg"
          alt="골프 풀스윙 배경 이미지"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={85}
        />
      </div>
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          <span className="relative">
            남양주 No.1{" "}
            <span className="relative font-bold text-rose-700">
              SIX-UNDER 골프 클럽
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-600"></spasn> */}
            </span>
          </span>
        </h1>
        <p className="text-2xl md:text-3xl mb-10 max-w-3xl font-bold drop-shadow-md">
          프로페셔널한 레슨과 첨단 시스템으로 당신의 골프 실력을 한 단계
          높여드립니다
        </p>
        <button
          onClick={handleReservation}
          className="bg-gradient-to-r from-fuchsia-500 to-green-500 hover:from-fuchsia-600 hover:to-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 shadow-lg cursor-pointer"
        >
          레슨 예약하기
        </button>

        {/* 스크롤 다운 버튼 추가 */}
        <div
          onClick={scrollToNextSection}
          className="absolute bottom-10 cursor-pointer animate-bounce"
        >
          <div className="animate-spin-slow">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          <p className="text-sm mt-2"></p>
        </div>
      </div>
    </section>
  );
}
