export default function Pricing() {
  const pricingPlans = [
    {
      name: "원포인트 레슨",
      price: "60,000원",
      duration: "60분",
      features: [
        "개인 맞춤형 집중 교정",
        "영상 분석 포함",
        "문제점 즉각 해결",
        "맞춤형 연습 가이드 제공",
      ],
      highlight: false,
      cta: "예약하기",
    },
    {
      name: "정기 레슨 패키지",
      price: "500,000원",
      duration: "10회권",
      features: [
        "체계적인 커리큘럼",
        "FULL SWING 분석 1회 포함",
        "실시간 피드백 및 교정",
        "맞춤형 홈트레이닝 제공",
        "우선 예약 서비스",
      ],
      highlight: true,
      cta: "베스트 선택",
    },
    {
      name: "FULL SWING 분석",
      price: "120,000원",
      duration: "90분",
      features: [
        "타이거 우즈 선택 시스템",
        "고속 카메라 스윙 분석",
        "세부 수치 데이터 제공",
        "개선 방향 상담 포함",
        "데이터 저장 및 비교분석",
      ],
      highlight: false,
      cta: "예약하기",
    },
    {
      name: "그룹 레슨",
      price: "40,000원",
      duration: "인당 / 90분",
      features: [
        "3-4인 소규모 진행",
        "그룹별 수준 맞춤 교육",
        "친목과 교육 동시에",
        "팀 단위 할인 적용",
      ],
      highlight: false,
      cta: "문의하기",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">가격 안내</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 프로그램에 맞는 최적의 선택을 제공합니다
          </p>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                plan.highlight ? "border-2 border-green-600 relative" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-green-600 text-white py-1 px-4 text-sm font-bold">
                  인기 상품
                </div>
              )}
              <div className={`p-6 ${plan.highlight ? "bg-green-50" : ""}`}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-700">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
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
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded transition duration-300 font-bold ${
                    plan.highlight
                      ? "bg-green-700 hover:bg-green-800 text-white"
                      : "bg-white border-2 border-green-700 text-green-700 hover:bg-green-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            특별 할인 프로모션
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
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
              <span className="text-gray-600">신규 회원 첫 레슨 20% 할인</span>
            </div>
            <div className="flex items-start">
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
                3월 이벤트: FULL SWING 분석 50% 할인
              </span>
            </div>
            <div className="flex items-start">
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
                친구 추천 시 두 명 모두 10% 할인
              </span>
            </div>
            <div className="flex items-start">
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
                VIP 회원 특별 혜택: 전용 상담 및 우선 예약
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
