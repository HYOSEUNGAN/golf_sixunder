export default function Hero() {
  return (
    <section className="relative h-screen bg-[url('/images/golf-hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container h-full mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          남양주 No.1 식스언더골프클럽
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          프로페셔널한 레슨과 첨단 시스템으로 당신의 골프 실력을 한 단계
          높여드립니다
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          레슨 예약하기
        </button>
      </div>
    </section>
  );
}
