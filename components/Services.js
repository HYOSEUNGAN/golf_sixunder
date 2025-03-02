import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            프로그램 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            개인 맞춤형 골프 레슨으로 당신의 실력 향상을 도와드립니다
          </p>
          <div className="w-30 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 서비스 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/images/시설1.jpeg"
                alt="원포인트 교정 레슨"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                원포인트 교정 레슨
              </h3>
              <p className="text-gray-600 mb-4">
                스윙, 퍼팅, 어프로치 등 특정 부분만 집중적으로 개선하고 싶은
                골퍼들을 위한 맞춤형 레슨입니다. 정확한 문제점 분석과 즉각적인
                교정으로 빠른 실력 향상을 경험하세요.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://map.naver.com/p/entry/place/1852175573?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1873896&lat=37.7121230&c=17.36,0,0,0,dh"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>

          {/* 서비스 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/images/시설1.jpeg"
                alt="정기 레슨 프로그램"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                정기 레슨 프로그램
              </h3>
              <p className="text-gray-600 mb-4">
                체계적인 커리큘럼에 따라 기초부터 고급 테크닉까지 단계별로 배울
                수 있는 정기 레슨입니다. 꾸준한 관리와 피드백으로 확실한 실력
                향상을 보장합니다.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://map.naver.com/p/entry/place/1852175573?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1873896&lat=37.7121230&c=17.36,0,0,0,dh"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>

          {/* 서비스 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/images/시설1.jpeg"
                alt="그룹 레슨"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                그룹 레슨
              </h3>
              <p className="text-gray-600 mb-4">
                친구, 동료들과 함께 즐기는 그룹 레슨입니다. 개인 레슨보다 부담
                없는 가격으로 즐겁게 골프를 배울 수 있으며, 서로 동기부여가 되어
                빠른 상승효과를 볼 수 있습니다.
              </p>
              <div className="flex justify-end">
                <a
                  href="https://map.naver.com/p/entry/place/1852175573?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.1873896&lat=37.7121230&c=17.36,0,0,0,dh"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
