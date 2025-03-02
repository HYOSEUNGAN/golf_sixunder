"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-white shadow-md sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpeg"
              alt="식스언더골프클럽"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-bold text-xl">식스언더골프클럽</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 font-bold">
          <Link href="#about" className="text-gray-700 hover:text-red-700">
            소개
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-red-700">
            프로그램
          </Link>
          <Link href="#fullswing" className="text-gray-700 hover:text-red-700">
            FULL SWING
          </Link>
          <Link
            href="#success-stories"
            className="text-gray-700 hover:text-red-700"
          >
            성공 사례
          </Link>
          {/* <Link href="#pricing" className="text-gray-700 hover:text-red-700">
            가격 안내
          </Link> */}
          <Link href="#experience" className="text-gray-700 hover:text-red-700">
            경력
          </Link>
          <Link
            href="#instagram-feed"
            className="text-gray-700 hover:text-red-700"
          >
            인스타그램
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-red-700">
            문의
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/club_six_under/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6 fill-current"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%EA%B3%A8%ED%94%84/place/1852175573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-500"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="#03c75a"
                d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"
              />
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          {/* 모바일 메뉴 버튼 */}
          <button
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              소개
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              프로그램
            </Link>
            <Link
              href="#fullswing"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FULL SWING
            </Link>
            <Link
              href="#success-stories"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              성공 사례
            </Link>
            {/* <Link
              href="#pricing"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              가격 안내
            </Link> */}
            <Link
              href="#experience"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              경력
            </Link>
            <Link
              href="#instagram-feed"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              인스타그램
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-red-700 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              문의
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
