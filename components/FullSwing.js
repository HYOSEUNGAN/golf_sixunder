export default function FullSwing() {
  return (
    <section id="fullswing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              FULL SWING 시스템
            </h2>
            <div className="w-16 h-1 bg-green-700 mb-8"></div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              타이거 우즈가 선택한 남양주 최초 도입 시스템
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              식스언더골프클럽은 남양주 최초로 FULL SWING 분석 시스템을
              도입하였습니다. 이 시스템은 타이거 우즈를 비롯한 세계적인 프로
              골퍼들이 사용하는 첨단 기술로, 스윙의 모든 측면을 정밀하게
              분석해드립니다.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-700 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">
                  고속 카메라로 스윙 궤도 분석
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-700 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">
                  클럽 페이스 각도 및 스윙 패스 추적
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-700 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">
                  볼 초속, 스핀량, 발사 각도 측정
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-green-700 mr-2 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-600">
                  3D 동작 분석으로 체중 이동 및 자세 교정
                </span>
              </li>
            </ul>
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition duration-300">
              분석 예약하기
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-lg shadow-xl h-96 overflow-hidden">
              {/* 여기에 FULL SWING 시스템 이미지나 영상을 넣을 수 있습니다 */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
