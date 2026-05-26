import { NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt', 'fr', 'de', 'it', 'ja', 'ko', 'zh', 'ru'];
const baseUrl = 'https://cube.book';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;

  const staticPages = [
    { path: '', priority: '1.0' },
    { path: '/privacy', priority: '0.5' },
    { path: '/terms', priority: '0.5' },
    { path: '/tools/screenshots', priority: '0.8' },
    { path: '/tools/stringart-screenshots', priority: '0.8' },
  ];

  let urls = '';

  for (const page of staticPages) {
    urls += `  <url>
    <loc>${baseUrl}/${locale}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
