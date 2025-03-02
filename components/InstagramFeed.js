"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function InstagramFeed() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  // 인스타그램 포스트 렌더링 함수
  const processInstagramEmbeds = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      try {
        console.log("Instagram 임베드 처리 시작");
        window.instgrm.Embeds.process();
        setLoading(false);
      } catch (err) {
        console.error("Instagram embed processing failed:", err);
        setError(true);
        setLoading(false);
      }
    } else {
      console.warn("인스타그램 임베드 객체를 찾을 수 없습니다");

      // 최대 재시도 횟수 확인
      if (retryCount < MAX_RETRIES) {
        const nextRetry = retryCount + 1;
        console.log(
          `인스타그램 임베드 재시도 (${nextRetry}/${MAX_RETRIES})...`
        );
        setRetryCount(nextRetry);
      } else {
        console.error("최대 재시도 횟수 초과");
        setError(true);
        setLoading(false);
      }
    }
  };

  // 스크립트 로드 타임아웃 처리
  useEffect(() => {
    if (scriptLoaded) {
      // 스크립트가 로드되었지만 인스타그램 임베드가 준비되지 않은 경우 처리
      const checkEmbedsTimer = setTimeout(() => {
        if (window.instgrm && window.instgrm.Embeds) {
          processInstagramEmbeds();
        } else {
          // 인스타그램 스크립트가 로드되었지만 임베드가 준비되지 않은 경우
          const retryTimer = setTimeout(() => {
            console.log("인스타그램 임베드 재시도");
            processInstagramEmbeds();
          }, 2000);

          return () => clearTimeout(retryTimer);
        }
      }, 1000);

      return () => clearTimeout(checkEmbedsTimer);
    }
  }, [scriptLoaded, retryCount]);

  // 로딩 시간이 너무 오래 걸리는 경우 처리
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (loading && retryCount >= MAX_RETRIES) {
        console.warn("인스타그램 로딩 타임아웃");
        setError(true);
        setLoading(false);
      }
    }, 10000); // 10초 후 타임아웃

    return () => clearTimeout(loadingTimeout);
  }, [loading, retryCount]);

  // 실제 인스타그램 포스트 URL 목록 (실제 URL로 변경 필요)
  const instagramPosts = [
    "https://www.instagram.com/p/DGf3DGaSIE9/", // 이 URL들을 실제 포스트 URL로 변경하세요
    "https://www.instagram.com/p/DGpgAfFT0Vn/",
    "https://www.instagram.com/p/DGY9IvIzLDp/",
    "https://www.instagram.com/p/DGS6_Roy6g7/?img_index=1",
    "https://www.instagram.com/p/DC-obWXyyow/?img_index=1",
    "https://www.instagram.com/p/DGnz3AESTh4/?img_index=1",
  ];

  return (
    <section id="instagram-feed" className="py-20 bg-gray-50">
      {/* 인스타그램 임베드 스크립트 */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("인스타그램 스크립트 로드됨");
          setScriptLoaded(true);
          processInstagramEmbeds();
        }}
        onError={() => {
          console.error("인스타그램 스크립트 로드 실패");
          setError(true);
          setLoading(false);
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              인스타그램에서 만나는 식스언더골프클럽
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            실시간 소식과 골프 팁을 인스타그램에서 확인하세요
          </p>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-80">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-green-700 mb-6"></div>
            <p className="text-gray-600 text-lg">
              인스타그램 피드를 불러오는 중...
            </p>
            {retryCount > 0 && (
              <p className="text-gray-500 mt-2">
                불러오는 중에 문제가 발생할 수 있습니다. ({retryCount}/
                {MAX_RETRIES})
              </p>
            )}
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-lg text-gray-700 mb-4">
              인스타그램 피드를 불러오는 중 문제가 발생했습니다.
            </p>
            <p className="text-gray-500 mb-6 px-6">
              인터넷 연결을 확인하거나 잠시 후 다시 시도해주세요.
            </p>
            <a
              href="https://www.instagram.com/club_six_under/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-medium hover:underline bg-green-50 px-4 py-2 rounded-full inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.36-2.227.42-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.36-1.057-.42-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.36 2.227-.42 1.266-.057 1.646-.07 4.85-.07zm0 2.122c-3.16 0-3.508.014-4.743.069-1.144.055-1.765.243-2.178.404-.547.21-.937.46-1.35.873-.412.412-.663.803-.873 1.35-.161.413-.35 1.034-.404 2.178-.055 1.235-.069 1.583-.069 4.743s.014 3.508.069 4.743c.055 1.144.243 1.765.404 2.178.21.547.46.937.873 1.35.412.412.803.663 1.35.873.413.161 1.034.35 2.178.404 1.235.055 1.583.069 4.743.069s3.508-.014 4.743-.069c1.144-.055 1.765-.243 2.178-.404.547-.21.937-.46 1.35-.873.412-.412.663-.803.873-1.35.161-.413.35-1.034.404-2.178.055-1.235.069-1.583.069-4.743s-.014-3.508-.069-4.743c-.055-1.144-.243-1.765-.404-2.178-.21-.547-.46-.937-.873-1.35-.412-.412-.803-.663-1.35-.873-.413-.161-1.034-.35-2.178-.404-1.235-.055-1.583-.069-4.743-.069zm0 3.622a6.093 6.093 0 110 12.186 6.093 6.093 0 010-12.186zm0 10.063a3.97 3.97 0 100-7.94 3.97 3.97 0 000 7.94zm7.794-10.314a1.424 1.424 0 100-2.848 1.424 1.424 0 000 2.848z" />
              </svg>
              인스타그램에서 직접 확인하기
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((postUrl, index) => (
              <div
                key={index}
                className="instagram-post-container rounded-lg shadow-lg overflow-hidden bg-white h-[380px] flex items-center justify-center"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "0",
                    maxWidth: "80%",
                    width: "80%",
                    height: "350px",
                    padding: "10px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: "16px", width: "100%" }}>
                      <a
                        href={postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center no-underline text-black hover:underline"
                      >
                        <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-6 h-6 text-gray-700"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.36-2.227.42-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.36-1.057-.42-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.36 2.227-.42 1.266-.057 1.646-.07 4.85-.07zm0 2.122c-3.16 0-3.508.014-4.743.069-1.144.055-1.765.243-2.178.404-.547.21-.937.46-1.35.873-.412.412-.663.803-.873 1.35-.161.413-.35 1.034-.404 2.178-.055 1.235-.069 1.583-.069 4.743s.014 3.508.069 4.743c.055 1.144.243 1.765.404 2.178.21.547.46.937.873 1.35.412.412.803.663 1.35.873.413.161 1.034.35 2.178.404 1.235.055 1.583.069 4.743.069s3.508-.014 4.743-.069c1.144-.055 1.765-.243 2.178-.404.547-.21.937-.46 1.35-.873.412-.412.663-.803.873-1.35.161-.413.35-1.034.404-2.178.055-1.235.069-1.583.069-4.743s-.014-3.508-.069-4.743c-.055-1.144-.243-1.765-.404-2.178-.21-.547-.46-.937-.873-1.35-.412-.412-.803-.663-1.35-.873-.413-.161-1.034-.35-2.178-.404-1.235-.055-1.583-.069-4.743-.069zm0 3.622a6.093 6.093 0 110 12.186 6.093 6.093 0 010-12.186zm0 10.063a3.97 3.97 0 100-7.94 3.97 3.97 0 000 7.94zm7.794-10.314a1.424 1.424 0 100-2.848 1.424 1.424 0 000 2.848z" />
                          </svg>
                        </div>
                        <p className="font-semibold text-sm">
                          인스타그램 포스트 보기
                        </p>
                      </a>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/club_six_under/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 hover:from-purple-600 hover:to-pink-600"
          >
            <svg
              className="h-6 w-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.06 1.805.249 2.227.419.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.36 1.057.42 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.06 1.17-.249 1.805-.42 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.36-2.227.42-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.06-1.805-.249-2.227-.42-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.36-1.057-.42-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.06-1.17.249-1.805.42-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.36 2.227-.42 1.266-.057 1.646-.07 4.85-.07zm0 2.122c-3.16 0-3.508.014-4.743.069-1.144.055-1.765.243-2.178.404-.547.21-.937.46-1.35.873-.412.412-.663.803-.873 1.35-.161.413-.35 1.034-.404 2.178-.055 1.235-.069 1.583-.069 4.743s.014 3.508.069 4.743c.055 1.144.243 1.765.404 2.178.21.547.46.937.873 1.35.412.412.803.663 1.35.873.413.161 1.034.35 2.178.404 1.235.055 1.583.069 4.743.069s3.508-.014 4.743-.069c1.144-.055 1.765-.243 2.178-.404.547-.21.937-.46 1.35-.873.412-.412.663-.803.873-1.35.161-.413.35-1.034.404-2.178.055-1.235.069-1.583.069-4.743s-.014-3.508-.069-4.743c-.055-1.144-.243-1.765-.404-2.178-.21-.547-.46-.937-.873-1.35-.412-.412-.803-.663-1.35-.873-.413-.161-1.034-.35-2.178-.404-1.235-.055-1.583-.069-4.743-.069zm0 3.622a6.093 6.093 0 110 12.186 6.093 6.093 0 010-12.186zm0 10.063a3.97 3.97 0 100-7.94 3.97 3.97 0 000 7.94zm7.794-10.314a1.424 1.424 0 100-2.848 1.424 1.424 0 000 2.848z" />
            </svg>
            인스타그램에서 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
