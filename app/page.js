import Script from "next/script";
import EventModal from "../components/EventModal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FullSwing from "../components/FullSwing";
import Pricing from "../components/Pricing";
import Experience from "../components/Experience";
import SuccessStories from "../components/SuccessStories";
import InstagramFeed from "../components/InstagramFeed";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // Schema.org 구조화된 데이터
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "식스언더골프클럽",
    description:
      "남양주 No.1 골프 교육 클럽으로 최고의 교육과 시설을 제공합니다.",
    url: "https://www.sixundergolf.com",
    telephone: "031-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "OO로 123번길 45",
      addressLocality: "남양주시",
      addressRegion: "경기도",
      postalCode: "12345",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.12345", // 실제 위도로 변경 필요
      longitude: "127.12345", // 실제 경도로 변경 필요
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    offers: {
      "@type": "Offer",
      name: "골프 레슨 프로그램",
      description: "개인 맞춤형 골프 레슨으로 당신의 실력 향상을 도와드립니다",
      price: "60000",
      priceCurrency: "KRW",
    },
  };

  return (
    <main>
      {/* 구조화된 데이터 추가 */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventModal />
      <Header />
      <Hero />
      <About />
      <Services />
      <FullSwing />
      <SuccessStories />
      <Pricing />
      <Experience />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
