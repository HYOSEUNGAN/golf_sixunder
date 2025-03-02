import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "식스언더골프클럽 | 남양주 No.1 골프 레슨 및 트레이닝",
  description:
    "남양주 최고의 골프 아카데미, 식스언더골프클럽입니다. FULL SWING 시스템과 전문 코치진의 맞춤형 레슨을 경험해보세요.",
  icons: {
    icon: "/favicon.ico",
    // 다양한 크기의 아이콘 추가 가능
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords:
    "골프, 골프레슨, 남양주골프, 식스언더골프, 골프아카데미, FULL SWING",
  // metadataBase: new URL("https://www.sixundergolf.com"), // 실제 도메인으로 변경 필요
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "식스언더골프클럽 | 남양주 No.1 골프 레슨 및 트레이닝",
    description:
      "남양주 최고의 골프 아카데미, 식스언더골프클럽입니다. FULL SWING 시스템과 전문 코치진의 맞춤형 레슨을 경험해보세요.",
    url: "https://www.sixundergolf.com", // 실제 도메인으로 변경 필요
    siteName: "식스언더골프클럽",
    images: [
      {
        url: "/images/og-image.jpg", // Open Graph 이미지 경로
        width: 1200,
        height: 630,
        alt: "식스언더골프클럽",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Google Search Console 인증 코드", // 실제 코드로 변경 필요
    naver: "Naver Search Advisor 인증 코드", // 실제 코드로 변경 필요
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
