import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://knytxstudio.com';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Static routes configuration
const staticPages = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/services',
    priority: '0.9',
    changefreq: 'weekly',
  },
  // {
  //   path: '/portfolio',
  //   priority: '0.9',
  //   changefreq: 'weekly',
  // },
  {
    path: '/internships',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/pricing',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/blog',
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    path: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
  },
];

async function fetchSanityPosts() {
  const projectId = 'j87wu5cb';
  const dataset = 'production';
  const query = encodeURIComponent('*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt, publishedAt }');
  const url = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) {
      console.warn(`[sitemap] Sanity API returned status ${response.status}`);
      return [];
    }
    const data = await response.json();
    return (data.result || []).map((post) => ({
      path: `/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: post._updatedAt || post.publishedAt || new Date().toISOString(),
    }));
  } catch (error) {
    console.warn('[sitemap] Notice: Could not reach Sanity API (using static pages). Error:', error.message);
    return [];
  }
}

async function generateSitemap() {
  console.log(`[sitemap] Generating sitemap for ${BASE_URL}...`);
  const today = new Date().toISOString().split('T')[0];

  const blogPages = await fetchSanityPosts();
  const allPages = [
    ...staticPages.map((page) => ({
      ...page,
      lastmod: page.lastmod || today,
    })),
    ...blogPages,
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${page.lastmod.split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, sitemapXml.trim() + '\n', 'utf8');
  console.log(`[sitemap] Successfully wrote ${allPages.length} URLs to ${SITEMAP_PATH}`);
}

generateSitemap().catch((err) => {
  console.error('[sitemap] Failed to generate sitemap:', err);
  process.exit(1);
});
