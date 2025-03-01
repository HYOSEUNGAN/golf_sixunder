"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 구현에서는 Instagram Graph API 사용
    // 여기서는 예시 데이터로 대체

    const mockPosts = [
      {
        id: "1",
        caption:
          "식스언더골프클럽에서 프로와 함께하는 원데이 클래스 진행 중! #골프레슨 #남양주골프",
        media_url: "/images/insta-1.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example1",
        timestamp: "2023-06-15T09:30:00+0000",
      },
      {
        id: "2",
        caption:
          "FULL SWING 분석 시스템으로 정확한 스윙 궤도 파악! #골프스윙분석 #식스언더골프",
        media_url: "/images/insta-2.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example2",
        timestamp: "2023-06-10T14:20:00+0000",
      },
      {
        id: "3",
        caption:
          "이번 주말 회원 라운딩 현장! 함께 성장하는 즐거움 #골프라운딩 #골프스쿨",
        media_url: "/images/insta-3.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example3",
        timestamp: "2023-06-05T11:15:00+0000",
      },
      {
        id: "4",
        caption:
          "주니어 골퍼를 위한 여름방학 특별 프로그램 오픈! #주니어골프 #골프캠프",
        media_url: "/images/insta-4.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example4",
        timestamp: "2023-06-01T16:45:00+0000",
      },
      {
        id: "5",
        caption:
          "비 오는 날에도 실내에서 완벽한 연습을! #실내골프연습 #골프레슨",
        media_url: "/images/insta-5.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example5",
        timestamp: "2023-05-28T13:10:00+0000",
      },
      {
        id: "6",
        caption:
          "식스언더골프클럽의 새로운 프로 코치를 소개합니다! #골프코치 #프로골퍼",
        media_url: "/images/insta-6.jpg", // 실제 이미지로 교체 필요
        permalink: "https://www.instagram.com/p/example6",
        timestamp: "2023-05-22T10:30:00+0000",
      },
    ];

    // 실제 API 호출 대신 예시 데이터 설정
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    // 실제 Instagram API 호출 예시:
    // async function fetchInstagramFeed() {
    //   try {
    //     const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
    //     const data = await response.json();
    //     setPosts(data.data);
    //   } catch (error) {
    //     console.error('Instagram feed 로딩 실패:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    //
    // fetchInstagramFeed();
  }, []);

  // 해시태그를 링크로 변환하는 함수
  const formatCaption = (caption) => {
    if (!caption) return "";

    // 최대 60자까지만 표시하고 생략 부호 추가
    let shortCaption =
      caption.length > 60 ? caption.substring(0, 60) + "..." : caption;

    // 해시태그에 링크와 색상 추가
    return shortCaption.replace(
      /#(\w+)/g,
      '<a href="https://www.instagram.com/explore/tags/$1" target="_blank" class="text-green-700 font-medium">#$1</a>'
    );
  };

  return (
    <section id="instagram-feed" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            인스타그램에서 만나는 식스언더골프클럽
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            실시간 소식과 골프 팁을 인스타그램에서 확인하세요
          </p>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.media_url}
                      alt="인스타그램 포스트"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: formatCaption(post.caption),
                      }}
                    />
                    <p className="text-gray-500 text-sm mt-2">
                      {new Date(post.timestamp).toLocaleDateString("ko-KR")}
                    </p>
                  </div>
                </a>
              ))}
            </div>

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
          </>
        )}
      </div>
    </section>
  );
}
