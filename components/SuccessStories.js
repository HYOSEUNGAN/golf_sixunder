"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState("next"); // 'next' 또는 'prev'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideInterval = useRef(null);
  const slideDuration = 5000; // 5초마다 슬라이드 변경

  const stories = [
    {
      name: "김태호 회원님",
      period: "3개월",
      description:
        "드라이버 비거리가 30야드 향상되고 슬라이스가 크게 개선되었습니다.",
      beforeImage: "/images/자세1.jpeg", // 실제 이미지로 교체 필요
      afterImage: "/images/자세2.jpeg", // 실제 이미지로 교체 필요
    },
    {
      name: "이지연 회원님",
      period: "2개월",
      description:
        "어프로치 정확도가 눈에 띄게 향상되어 평균 타수가 5타 감소했습니다.",
      beforeImage: "/images/자세3.jpeg", // 실제 이미지로 교체 필요
      afterImage: "/images/자세4.jpeg", // 실제 이미지로 교체 필요
    },
    {
      name: "박준혁 회원님",
      period: "4개월",
      description: "스윙 자세 교정을 통해 일관된 볼 컨트롤이 가능해졌습니다.",
      beforeImage: "/images/자세1.jpeg", // 실제 이미지로 교체 필요
      afterImage: "/images/자세4.jpeg", // 실제 이미지로 교체 필요
    },
  ];

  // 자동 슬라이드 타이머 설정
  useEffect(() => {
    if (isPlaying) {
      startSlideTimer();
    } else {
      stopSlideTimer();
    }

    return () => stopSlideTimer(); // 컴포넌트 언마운트 시 타이머 정리
  }, [isPlaying, currentStory]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setDirection("next");
      setIsTransitioning(true);
      setTimeout(() => {
        nextStory();
        setIsTransitioning(false);
      }, 500); // 트랜지션 효과 시간
    }, slideDuration);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    stopSlideTimer();
    setDirection("next");
    setIsTransitioning(true);
    setTimeout(() => {
      nextStory();
      setIsTransitioning(false);
      if (isPlaying) startSlideTimer();
    }, 500);
  };

  const handlePrev = () => {
    stopSlideTimer();
    setDirection("prev");
    setIsTransitioning(true);
    setTimeout(() => {
      prevStory();
      setIsTransitioning(false);
      if (isPlaying) startSlideTimer();
    }, 500);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // 네이버 지도로 이동하는 함수 추가
  const handleConsultation = () => {
    window.open(
      "https://map.naver.com/p/entry/place/1852175573?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1873896&lat=37.7121230&c=17.36,0,0,0,dh",
      "_blank"
    );
  };

  const story = stories[currentStory];

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            회원 성공 스토리
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            식스언더골프클럽에서 단기간에 실력이 향상된 회원들의 생생한 비교
            사례
          </p>
          <div className="w-16 h-1 bg-rose-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-7xl mx-auto bg-neutral-50 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* 전/후 이미지 비교 */}
              <div className="md:w-7/12 overflow-hidden">
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-transform duration-500 ease-in-out ${
                    isTransitioning
                      ? direction === "next"
                        ? "transform -translate-x-8 opacity-70"
                        : "transform translate-x-8 opacity-70"
                      : "transform translate-x-0 opacity-100"
                  }`}
                >
                  <div className="flex-1 relative">
                    <div className="absolute top-2 left-2 bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      BEFORE
                    </div>
                    <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={story.beforeImage}
                        alt={`${story.name} 레슨 전`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* 화살표 추가 */}
                  <div className="flex items-center justify-center">
                    <div
                      className="sm:w-12 sm:h-12 w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center shadow-lg 
                                   sm:my-0 my-2 transform transition-all duration-300 hover:scale-110 group"
                    >
                      {/* 화면 크기에 따라 다른 방향의 화살표 표시 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:h-6 sm:w-6 h-4 w-4 text-white group-hover:animate-pulse hidden sm:block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {/* 가로 방향 화살표 (sm 이상) */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:hidden h-4 w-4 text-white group-hover:animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {/* 세로 방향 화살표 (모바일) */}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7 7m0 0l7-7m-7 7V3"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="absolute top-2 left-2 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                      AFTER
                    </div>
                    <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={story.afterImage}
                        alt={`${story.name} 레슨 후`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 설명 텍스트 */}
              <div className="md:w-5/12 flex flex-col justify-between">
                <div
                  className={`bg-white p-6 rounded-lg shadow-md transition-opacity duration-500 ease-in-out h-80 md:h-96 lg:h-[450px] flex flex-col ${
                    isTransitioning ? "opacity-50" : "opacity-100"
                  }`}
                >
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {story.name}
                    </h3>
                    <p className="text-rose-600 font-semibold mb-4">
                      레슨 기간: {story.period}
                    </p>
                    <p className="text-gray-600 mb-6">{story.description}</p>
                  </div>
                  <div className="flex justify-center space-x-8 items-center">
                    <button
                      onClick={handlePrev}
                      className="text-rose-600 hover:text-rose-800 transition-colors"
                      aria-label="이전 스토리"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="text-rose-600 hover:text-rose-800 transition-colors"
                      aria-label="다음 스토리"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center mt-4 flex justify-center items-center">
                    <span className="text-sm text-gray-500 mr-3">
                      {currentStory + 1} / {stories.length}
                    </span>
                    <div className="flex space-x-2">
                      {stories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            stopSlideTimer();
                            setCurrentStory(index);
                            if (isPlaying) startSlideTimer();
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            currentStory === index
                              ? "bg-rose-600"
                              : "bg-neutral-300"
                          }`}
                          aria-label={`${index + 1}번 스토리로 이동`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleConsultation}
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md hover:shadow-lg animate-bounce cursor-pointer"
          >
            지금 무료 상담 받기
          </button>
        </div>
      </div>
    </section>
  );
}
