export function GET() {
  const baseURL = "https://viecells.com";
  const robots = `# Generated robots.txt for VieCell Institute
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: ${baseURL}/sitemap.xml
`;
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
