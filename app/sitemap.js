export default function sitemap() {
  const baseUrl = "https://www.sixundergolf.com"; // 실제 도메인으로 변경 필요

  // 사이트의 모든 URL을 포함
  const routes = [
    "",
    "/about",
    "/services",
    "/fullswing",
    "/pricing",
    "/experience",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
