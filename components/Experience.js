export default function Experience() {
  const experiences = [
    {
      title: "KPGA 투어 프로 코치 활동",
      period: "2018 - 현재",
      description:
        "다수의 KPGA 투어 프로 선수들을 지도하며 우승 기록 달성에 기여했습니다.",
    },
    {
      title: "국가대표 주니어 골프팀 코치",
      period: "2016 - 2020",
      description:
        "국가대표 주니어 선수들의 기술 향상과 경기력 강화를 위한 전문 코칭을 제공했습니다.",
    },
    {
      title: "미국 PGA 티칭 프로 자격 취득",
      period: "2015",
      description:
        "미국 PGA에서 인증하는 티칭 프로페셔널 자격을 취득하여 전문성을 인정받았습니다.",
    },
    {
      title: "세계적인 골프 아카데미 연수",
      period: "2012 - 2014",
      description:
        "미국, 영국 등 세계 유수의 골프 아카데미에서 최신 교습법과 기술을 연수했습니다.",
    },
    {
      title: "국내 유명 골프장 헤드 프로 활동",
      period: "2010 - 2015",
      description:
        "국내 최고급 골프장에서 헤드 프로페셔널로 활동하며 VIP 레슨 프로그램을 운영했습니다.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            경력 및 자격
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            풍부한 경험과 전문성을 바탕으로 최고의 레슨을 제공합니다
          </p>
          <div className="w-16 h-1 bg-green-700 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="mr-6 w-20 text-right">
                <div className="text-green-700 font-semibold">{exp.period}</div>
              </div>

              <div className="relative border-l-4 border-green-700 pl-8 pb-2">
                <div className="absolute w-4 h-4 bg-green-700 rounded-full left-0 top-0 -ml-2"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
