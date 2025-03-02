"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import Image from "next/image";

export default function Certifications() {
  const headingAnimation = useScrollAnimation({ threshold: 0.2 });
  const cardAnimation = useScrollAnimation({ threshold: 0.3 });
  const profileAnimation = useScrollAnimation({ threshold: 0.2 });

  // 탭 관련 상태 제거하고 모든 자격증을 하나의 배열로 통합
  const certifications = [
    {
      name: "KPGA 투어프로",
      issuer: "한국프로골프협회",
      year: "2015",
      icon: "/images/cert-icon-1.svg",
    },
    {
      name: "국가공인 스포츠지도사(골프) 1급",
      issuer: "문화체육관광부",
      year: "2016",
      icon: "/images/cert-icon-2.svg",
    },
    {
      name: "PGA Teaching Professional",
      issuer: "PGA of America",
      year: "2017",
      icon: "/images/cert-icon-5.svg",
    },
    {
      name: "TPI Certified Golf Fitness Instructor",
      issuer: "Titleist Performance Institute",
      year: "2018",
      icon: "/images/cert-icon-6.svg",
    },
  ];

  // 관련 골프 대회 성적
  const tournaments = [
    { name: "대한민국 오픈", result: "TOP 10", year: "2016" },
    { name: "KPGA 코리안투어", result: "우승 1회", year: "2017" },
    { name: "아시안 투어", result: "TOP 5", year: "2018" },
    { name: "KPGA 챔피언십", result: "준우승", year: "2019" },
  ];

  return (
    <section
      id="certifications"
      className="py-8 bg-gradient-to-br from-gray-50 to-gray-100" // padding 축소
    >
      <div className="container mx-auto px-2">
        {/* 섹션 제목 */}
        <div
          ref={headingAnimation.ref}
          className={`text-center mb-6 fade-in-up ${
            headingAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            전문 자격증 및 프로필
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            국내외 공인 자격증과 전문성을 통해 최고의 골프 레슨을 제공합니다
          </p>
          <div className="w-12 h-1 bg-green-700 mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {" "}
          {/* 간격 축소 */}
          {/* 프로필 이미지 및 소개 */}
          <div
            ref={profileAnimation.ref}
            className={`lg:w-1/3 fade-in flex flex-col ${
              profileAnimation.isVisible ? "visible" : ""
            }`}
          >
            <div className="relative mb-4 overflow-hidden rounded-xl shadow-lg group flex-shrink-0">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/images/자격증2.jpeg"
                  alt="골프 전문 코치 프로필"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold">최진수 프로</h3>
                <p className="text-gray-200 text-sm">
                  KPGA 투어프로 & PGA 티칭 프로
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg flex-grow">
              {" "}
              {/* 패딩 축소 */}
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                {" "}
                {/* 크기 축소 */}
                <svg
                  className="w-5 h-5 mr-2 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                주요 대회 성적
              </h3>
              <ul className="space-y-2">
                {" "}
                {/* 간격 축소 */}
                {tournaments.map((tournament, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-2"
                  >
                    <span className="text-gray-800 font-medium text-sm">
                      {" "}
                      {/* 텍스트 크기 축소 */}
                      {tournament.name}
                    </span>
                    <div className="flex items-center">
                      <span className="text-green-700 font-bold mr-2 text-sm">
                        {" "}
                        {/* 텍스트 크기 축소 */}
                        {tournament.result}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {" "}
                        {/* 텍스트 크기 축소 */}
                        {tournament.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 자격증 및 경력 */}
          <div
            ref={cardAnimation.ref}
            className={`lg:w-2/3 scale-in flex flex-col ${
              cardAnimation.isVisible ? "visible" : ""
            }`}
          >
            <div className="mb-4 flex-shrink-0">
              <div className="h-[300px] relative w-3/4 mx-auto">
                <Image
                  src="/images/자격증.jpeg"
                  alt="골프 자격증 및 수상 이미지"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-lg object-contain mx-auto h-full"
                  priority
                />
              </div>
            </div>

            {/* 자격증 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
              {" "}
              {/* 간격 축소 */}
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-700 hover:shadow-xl transition-shadow duration-300 stagger-item ${
                    cardAnimation.isVisible ? "visible" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-base text-gray-900 mb-1">
                        {" "}
                        {/* 텍스트 크기 축소 */}
                        {cert.name}
                      </h4>
                      <div className="flex justify-between">
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>{" "}
                        {/* 텍스트 크기 축소 */}
                        <span className="bg-green-100 text-green-800 text-xs font-medium py-0.5 px-2 rounded">
                          {" "}
                          {/* 패딩 축소 */}
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 추가 교육 및 전문 영역 */}
            <div className="mt-6 bg-white rounded-xl shadow-lg p-4 flex-grow">
              {" "}
              {/* 마진 및 패딩 축소 */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                {" "}
                {/* 텍스트 크기 및 마진 축소 */}
                <svg
                  className="w-5 h-5 mr-2 text-green-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                전문 교육 분야
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {" "}
                {/* 간격 축소 */}
                {[
                  "스윙 메커닉스",
                  "숏게임 전략",
                  "멘탈 트레이닝",
                  "체력 강화",
                  "장비 피팅",
                  "영상 분석",
                ].map(
                  (
                    skill,
                    index // 항목 개수 축소
                  ) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg py-2 px-3 text-center text-sm hover:bg-green-50 hover:text-green-800 transition-colors duration-300" /* 패딩 및 텍스트 크기 축소 */
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 자격증 이미지 갤러리 (선택적으로 추가) */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg"
          >
            상담 및 레슨 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
