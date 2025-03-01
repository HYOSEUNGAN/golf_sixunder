export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">문의하기</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든지 문의해주세요
          </p>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="연락처를 입력하세요"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  문의 내용
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="문의 내용을 입력하세요"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition duration-300 w-full"
              >
                문의하기
              </button>
            </form>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <div className="bg-gray-100 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                식스언더골프클럽
              </h3>

              <div className="flex items-start mb-6">
                <svg
                  className="h-6 w-6 text-green-700 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 mb-1">주소</p>
                  <p className="text-gray-600">
                    경기도 남양주시 OO로 123번길 45
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <svg
                  className="h-6 w-6 text-green-700 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 mb-1">전화번호</p>
                  <p className="text-gray-600">031-123-4567</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <svg
                  className="h-6 w-6 text-green-700 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 mb-1">이메일</p>
                  <p className="text-gray-600">info@sixundergolf.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-green-700 mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-800 mb-1">영업 시간</p>
                  <p className="text-gray-600">평일: 09:00 - 22:00</p>
                  <p className="text-gray-600">주말: 08:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
