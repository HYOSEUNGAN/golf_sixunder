export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.sixundergolf.com/sitemap.xml", // 실제 도메인으로 변경 필요
  };
}
