"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Image from "next/image";

export default function About() {
  const textAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });
  const featureAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            식스언더골프클럽 소개
          </h2>
          <div className="w-40 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div
            ref={imageAnimation.ref}
            className={`md:w-1/2 mb-8 md:mb-0 md:pr-8 fade-in ${
              imageAnimation.isVisible ? "visible" : ""
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-xl relative aspect-[3/2]">
              {/* 골프 클럽 소개 이미지 */}
              <Image
                src="/images/시설1.jpeg"
                alt="식스언더골프클럽 소개"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            ref={textAnimation.ref}
            className={`md:w-1/2 fade-in-up ${
              textAnimation.isVisible ? "visible" : ""
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              남양주에서 최고의 골프 경험을 선사합니다
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              식스언더골프클럽은 골프를 사랑하는 모든 분들에게 최상의 교육과
              시설을 제공합니다. 초보자부터 프로를 꿈꾸는 분들까지, 개인의
              수준과 목표에 맞춘 맞춤형 레슨 프로그램으로 실력 향상을
              도와드립니다.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              최신 장비와 첨단 기술을 통해 과학적이고 체계적인 골프 교육을
              제공하며, 편안하고 프로페셔널한 환경에서 골프의 즐거움을 경험하실
              수 있습니다.
            </p>
            <div ref={featureAnimation.ref} className="flex flex-wrap">
              {[
                "전문 코치진",
                "최신 시설",
                "맞춤형 프로그램",
                "첨단 분석 장비",
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`w-1/2 mb-4 stagger-item ${
                    featureAnimation.isVisible ? "visible" : ""
                  } delay-${index * 100}`}
                >
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-red-700 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
