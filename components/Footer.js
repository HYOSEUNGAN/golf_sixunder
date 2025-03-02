export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">식스언더골프클럽</h2>
            <p className="text-gray-400 max-w-xs">
              남양주 No.1 골프 교육 클럽으로 최고의 교육과 시설을 제공합니다.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/club_six_under/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.36-2.227.42-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.36-1.057-.42-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.36 2.227-.42 1.266-.057 1.646-.07 4.85-.07zm0 2.122c-3.16 0-3.508.014-4.743.069-1.144.055-1.765.243-2.178.404-.547.21-.937.46-1.35.873-.412.412-.663.803-.873 1.35-.161.413-.35 1.034-.404 2.178-.055 1.235-.069 1.583-.069 4.743s.014 3.508.069 4.743c.055 1.144.243 1.765.404 2.178.21.547.46.937.873 1.35.412.412.803.663 1.35.873.413.161 1.034.35 2.178.404 1.235.055 1.583.069 4.743.069s3.508-.014 4.743-.069c1.144-.055 1.765-.243 2.178-.404.547-.21.937-.46 1.35-.873.412-.412.663-.803.873-1.35.161-.413.35-1.034.404-2.178.055-1.235.069-1.583.069-4.743s-.014-3.508-.069-4.743c-.055-1.144-.243-1.765-.404-2.178-.21-.547-.46-.937-.873-1.35-.412-.412-.803-.663-1.35-.873-.413-.161-1.034-.35-2.178-.404-1.235-.055-1.583-.069-4.743-.069zm0 3.622a6.093 6.093 0 110 12.186 6.093 6.093 0 010-12.186zm0 10.063a3.97 3.97 0 100-7.94 3.97 3.97 0 000 7.94zm7.794-10.314a1.424 1.424 0 100-2.848 1.424 1.424 0 000 2.848z" />
                </svg>
              </a>
              <a
                href="https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%EA%B3%A8%ED%94%84/place/1852175573"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
