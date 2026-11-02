import type { APIRoute } from 'astro';
import { getSemanticInternalLinks } from '../lib/internal-linking.js';
import { RESIN_VILLAGES } from '../data/seo/villages.js';
import { locationsData } from '../data/seo/locations.js';
import { restorationsData } from '../data/seo/restorations.js';
import { animalsData } from '../data/seo/animals.js';
import { materialsData } from '../data/seo/materials.js';
import { stylesData, roomsData } from '../data/seo/styles-rooms.js';
import { occasionsData } from '../data/seo/occasions.js';
import { servicesData } from '../data/services.js';
import productsData from '../data/products.json';
import { SEASONS_DATA } from '../data/seasons.js';

const BASE_URL = 'https://resinaartmary.cr';

export const GET: APIRoute = async () => {
  const urlSet = new Set<string>();

  // 1. Core / Business Pages
  const corePages = [
    '/',
    '/piezas',
    '/catalogo',
    '/cursos',
    '/club-vip',
    '/directorio',
    '/servicios',
    '/blog',
    '/testimonios',
    '/landing',
    '/marys-arts',
    '/cursos/pintura-basico',
    '/cursos/pintura-medio',
    '/cursos/pintura-avanzado',
    '/cursos/patinas',
    '/cursos/velas-basico',
    '/cursos/velas-medio',
    '/cursos/velas-avanzado',
  ];
  corePages.forEach(p => urlSet.add(p));

  // 2. Casitas y Villas (Top Seller)
  RESIN_VILLAGES.forEach(v => {
    urlSet.add(`/casitas-villas/${v.slug}`);
  });
  const locationsList = Object.values(locationsData);

  locationsList.forEach(loc => {
    urlSet.add(`/casitas-resina/${loc.cantonSlug}`);
  });

  // 3. SEO Local (Materiales x Cantones)
  locationsList.forEach(loc => {
    urlSet.add(`/figuras-yeso/${loc.cantonSlug}`);
    urlSet.add(`/figuras-resina/${loc.cantonSlug}`);
    if (loc.cantonSlug === 'turrialba' || loc.cantonSlug === 'san-carlos') {
      urlSet.add(`/clases-pintura/${loc.cantonSlug}`);
    }
  });

  // 4. Restauración
  Object.values(restorationsData).forEach(r => {
    urlSet.add(`/restauracion/${r.slug}`);
  });
  locationsList.forEach(loc => {
    urlSet.add(`/restauracion/${loc.cantonSlug}`);
  });

  // 5. Combinatoria de Figuras (animales x materiales)
  Object.values(animalsData).forEach(animal => {
    Object.values(materialsData).forEach(mat => {
      urlSet.add(`/figura-${animal.slug}-${mat.slug}`);
    });
  });

  // 6. Decoración (estilos x habitaciones)
  Object.values(stylesData).forEach(st => {
    Object.values(roomsData).forEach(rm => {
      urlSet.add(`/decoracion-${st.slug}-${rm.slug}`);
    });
  });

  // 7. Regalos por ocasión
  Object.values(occasionsData).forEach(occ => {
    urlSet.add(`/regalo-${occ.slug}`);
  });

  // 8. Servicios especializados
  Object.keys(servicesData).forEach(serviceKey => {
    urlSet.add(`/servicios/${serviceKey}`);
  });

  // 9. Productos de catálogo
  (productsData as Array<{ slug?: string; id?: string }>).forEach(prod => {
    const slug = prod.slug || prod.id;
    if (slug) {
      urlSet.add(`/producto/${slug}`);
    }
  });

  // 10. Temporadas mensuales y Campañas
  SEASONS_DATA.forEach(s => {
    urlSet.add(`/temporadas/${s.month}`);
  });
  urlSet.add('/campanas/navidad');
  urlSet.add('/campanas/dia-de-la-madre');
  urlSet.add('/campanas/ediciones-limitadas');

  // 11. Blog articles
  urlSet.add('/blog/como-limpiar-y-conservar-figuras-de-resina-pintadas-a-mano');
  urlSet.add('/blog/guia-de-decoracion-emocional-crear-espacios-de-paz-en-el-hogar');

  const now = new Date().toISOString().split('T')[0];

  const sortedUrls = Array.from(urlSet).sort();

  const xmlUrls = sortedUrls.map(url => {
    let priority = '0.7';
    let changefreq = 'monthly';

    if (url === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (url === '/directorio' || url === '/piezas' || url === '/catalogo') {
      priority = '0.95';
      changefreq = 'weekly';
    } else if (url.startsWith('/casitas-villas/')) {
      priority = '0.95';
      changefreq = 'weekly';
    } else if (url.startsWith('/casitas-resina/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (url.startsWith('/restauracion/')) {
      priority = '0.9';
      changefreq = 'weekly';
    } else if (url.startsWith('/figuras-') || url.startsWith('/clases-pintura/')) {
      priority = '0.85';
      changefreq = 'weekly';
    } else if (url.startsWith('/servicios/')) {
      priority = '0.85';
      changefreq = 'monthly';
    } else if (url.startsWith('/producto/')) {
      priority = '0.8';
      changefreq = 'weekly';
    } else if (url.startsWith('/figura-') || url.startsWith('/decoracion-') || url.startsWith('/regalo-')) {
      priority = '0.75';
      changefreq = 'monthly';
    }

    return `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`.trim();

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
