"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-2xl text-green-700">
            식스언더골프클럽
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-gray-700 hover:text-green-700">
            소개
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-green-700">
            프로그램
          </Link>
          <Link
            href="#fullswing"
            className="text-gray-700 hover:text-green-700"
          >
            FULL SWING
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-green-700">
            가격 안내
          </Link>
          <Link
            href="#experience"
            className="text-gray-700 hover:text-green-700"
          >
            경력
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-green-700">
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
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.36-2.227.42-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.36-1.057-.42-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.36 2.227-.42 1.266-.057 1.646-.07 4.85-.07zm0 2.122c-3.16 0-3.508.014-4.743.069-1.144.055-1.765.243-2.178.404-.547.21-.937.46-1.35.873-.412.412-.663.803-.873 1.35-.161.413-.35 1.034-.404 2.178-.055 1.235-.069 1.583-.069 4.743s.014 3.508.069 4.743c.055 1.144.243 1.765.404 2.178.21.547.46.937.873 1.35.412.412.803.663 1.35.873.413.161 1.034.35 2.178.404 1.235.055 1.583.069 4.743.069s3.508-.014 4.743-.069c1.144-.055 1.765-.243 2.178-.404.547-.21.937-.46 1.35-.873.412-.412.663-.803.873-1.35.161-.413.35-1.034.404-2.178.055-1.235.069-1.583.069-4.743s-.014-3.508-.069-4.743c-.055-1.144-.243-1.765-.404-2.178-.21-.547-.46-.937-.873-1.35-.412-.412-.803-.663-1.35-.873-.413-.161-1.034-.35-2.178-.404-1.235-.055-1.583-.069-4.743-.069zm0 3.622a6.093 6.093 0 110 12.186 6.093 6.093 0 010-12.186zm0 10.063a3.97 3.97 0 100-7.94 3.97 3.97 0 000 7.94zm7.794-10.314a1.424 1.424 0 100-2.848 1.424 1.424 0 000 2.848z" />
            </svg>
          </a>
          <a
            href="https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%EA%B3%A8%ED%94%84/place/1852175573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-500"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </a>
        </div>

        <div className="md:hidden">
          {/* 모바일 메뉴 버튼 */}
          <button className="text-gray-700">
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
    </header>
  );
}
