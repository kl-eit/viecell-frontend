import { fetchAPI } from "../lib/api";

// NOTE: update NEXT_PUBLIC_SITE_URL in your environment if production domain differs
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://viecells.com";

function formatDate(d) {
  if (!d) return null;
  return new Date(d).toISOString();
}

export async function GET() {
  try {
    // fetch dynamic content in parallel
    const [posts, services, categories] = await Promise.all([
      fetchAPI("articles?pagination[limit]=1000&sort=Date:desc"),
      fetchAPI("services?pagination[limit]=1000"),
      fetchAPI("categories?pagination[limit]=1000"),
    ]);

    const staticRoutes = [
      { url: "", priority: 1.0 },
      { url: "about-us", priority: 0.8 },
      { url: "blogs", priority: 0.8 },
      { url: "services", priority: 0.9 },
      { url: "contact-us", priority: 0.6 },
      { url: "privacy-policy", priority: 0.3 },
      { url: "terms-conditions", priority: 0.3 },
      { url: "client-stories", priority: 0.6 },
      { url: "international-patients", priority: 0.6 },
      { url: "team-list", priority: 0.4 },
      { url: "press-coverage", priority: 0.4 },
      { url: "news-events", priority: 0.4 },
      { url: "research-innovation", priority: 0.4 },
      { url: "patient-care", priority: 0.4 },
    ];

    const urls = [];

    // add static routes
    staticRoutes.forEach((r) =>
      urls.push({ loc: `${BASE_URL}/${r.url}`, priority: r.priority, lastmod: null })
    );

    // add blog posts
    if (Array.isArray(posts)) {
      posts.forEach((p) => {
        if (!p?.slug) return;
        urls.push({
          loc: `${BASE_URL}/blogs/${p.slug}`,
          lastmod: formatDate(p.publishedAt || p.Date || p.updatedAt),
          priority: 0.7,
        });
      });
    }

    // add services
    if (Array.isArray(services)) {
      services.forEach((s) => {
        if (!s?.slug) return;
        urls.push({
          loc: `${BASE_URL}/services/${s.slug}`,
          lastmod: formatDate(s.updatedAt || s.publishedAt),
          priority: 0.8,
        });
      });
    }

    // add categories
    if (Array.isArray(categories)) {
      categories.forEach((c) => {
        if (!c?.slug) return;
        urls.push({
          loc: `${BASE_URL}/category/${c.slug}`,
          lastmod: formatDate(c.updatedAt || c.publishedAt),
          priority: 0.6,
        });
      });
    }

    // build XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(({ loc, lastmod, priority }) => {
        return `
      <url>
        <loc>${loc.replace(/\/+/g, "/")}</loc>
        ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
        <changefreq>weekly</changefreq>
        <priority>${(priority || 0.5).toFixed(1)}</priority>
      </url>`;
      })
      .join("")}
  </urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    });
  } catch (err) {
    console.error("sitemap generation error:", err);
    return new Response("<p>Unable to generate sitemap</p>", { status: 500 });
  }
}
