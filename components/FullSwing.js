"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function FullSwing() {
  const textAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.3 });
  const listAnimation = useScrollAnimation({ threshold: 0.4 });

  // 패럴랙스 스크롤 효과를 위한 상태
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 패럴랙스 변환 값 계산
  const calculateParallax = (baseValue) => {
    // 요소가 화면에 보이는 위치에 따라 변환 값 계산
    const element = document.getElementById("fullswing");
    if (!element) return baseValue;

    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;

    // 거리에 따라 변환 값 조정 (최대 이동 거리 제한)
    return baseValue - distanceFromCenter * 0.05;
  };

  return (
    <section id="fullswing" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            ref={textAnimation.ref}
            className={`lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 fade-in-up ${
              textAnimation.isVisible ? "visible" : ""
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              FULL SWING 시스템
            </h2>
            <div className="w-16 h-1 bg-red-700 mb-8"></div>
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              타이거 우즈가 선택한 남양주 최초 도입 시스템
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              식스언더골프클럽은 남양주 최초로 FULL SWING 분석 시스템을
              도입하였습니다. 이 시스템은 타이거 우즈를 비롯한 세계적인 프로
              골퍼들이 사용하는 첨단 기술로, 스윙의 모든 측면을 정밀하게
              분석해드립니다.
            </p>
            <ul ref={listAnimation.ref} className="space-y-4 mb-8">
              {[
                "고속 카메라로 스윙 궤도 분석",
                "클럽 페이스 각도 및 스윙 패스 추적",
                "볼 초속, 스핀량, 발사 각도 측정",
                "3D 동작 분석으로 체중 이동 및 자세 교정",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start stagger-item ${
                    listAnimation.isVisible ? "visible" : ""
                  } delay-${index * 100}`}
                >
                  <svg
                    className="h-5 w-5 text-red-700 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded transition duration-300">
              분석 예약하기
            </button>
          </div>

          <div
            ref={imageAnimation.ref}
            className={`lg:w-1/2 relative scale-in ${
              imageAnimation.isVisible ? "visible" : ""
            }`}
            style={{
              transform: imageAnimation.isVisible
                ? `scale(1) translateY(${calculateParallax(0)}px)`
                : "scale(0.95) translateY(30px)",
              transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
            }}
          >
            <div className="rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/풀스윙2.jpeg"
                alt="FULL SWING 시스템"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            {/* 떠다니는 아이콘 효과 - 클래스 기반 애니메이션으로 수정 */}
            <div
              className="absolute -top-4 -right-4 bg-red-700 text-white p-3 rounded-full shadow-lg float"
              style={{
                transform: `translateY(${Math.sin(scrollY * 0.05) * 10}px)`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
