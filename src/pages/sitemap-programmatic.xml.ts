import type { APIRoute } from 'astro';
import { getSemanticInternalLinks } from '../lib/internal-linking.js';

const BASE_URL = 'https://resinaartmary.cr';

export const GET: APIRoute = async () => {
  const allProgrammaticLinks = getSemanticInternalLinks('');

  // Extraer URLs únicas
  const uniqueUrls = Array.from(new Set(allProgrammaticLinks.map(l => l.url)));
  const now = new Date().toISOString().split('T')[0];

  const xmlUrls = uniqueUrls.map(url => {
    let priority = '0.8';
    let changefreq = 'weekly';

    if (url.startsWith('/restauracion/')) {
      priority = '0.9';
    } else if (url.startsWith('/figuras-') || url.startsWith('/clases-pintura/')) {
      priority = '0.85';
    } else if (url.startsWith('/piezas') || url.startsWith('/catalogo')) {
      priority = '1.0';
    }

    return `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
  }).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/directorio</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>${xmlUrls}
</urlset>`.trim();

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
