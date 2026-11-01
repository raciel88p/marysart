import { materialsData } from '../data/seo/materials.js';
import { locationsData } from '../data/seo/locations.js';
import { animalsData } from '../data/seo/animals.js';
import { stylesData, roomsData } from '../data/seo/styles-rooms.js';
import { occasionsData } from '../data/seo/occasions.js';
import { restorationsData } from '../data/seo/restorations.js';

export interface InternalLinkItem {
  title: string;
  url: string;
  category: 'Local' | 'Material' | 'Fauna' | 'Decoración' | 'Regalos' | 'Restauración' | 'Cursos' | 'Pilares';
  description?: string;
}

/**
 * Genera enlaces internos contextuales y de cluster temático para cualquier página del sistema
 */
export function getSemanticInternalLinks(currentUrl: string): InternalLinkItem[] {
  const links: InternalLinkItem[] = [];

  // Enlaces a pilares obligatorios
  links.push(
    { title: 'Catálogo de Piezas & Revistas Digitales', url: '/piezas', category: 'Pilares', description: 'Explora nuestros catálogos digitales de figuras listas para encargo.' },
    { title: 'Tienda & Catálogo General', url: '/catalogo', category: 'Pilares', description: 'Figuras sacras, animales, vintage y ediciones especiales.' },
    { title: 'Servicios de Restauración Artística', url: '/servicios', category: 'Pilares', description: 'Conservación profesional de imágenes religiosas y esculturas.' },
    { title: 'Club VIP & Membresía Artesanal', url: '/club-vip', category: 'Pilares', description: 'Comunidad exclusiva de amantes del arte y la pintura en Costa Rica.' }
  );

  // Red de SEO Local por Material (principales cantones)
  Object.keys(materialsData).forEach(mSlug => {
    ['cartago', 'turrialba', 'san-jose', 'alajuela', 'heredia', 'escazu'].forEach(cSlug => {
      const url = `/figuras-${mSlug}/${cSlug}`;
      if (url !== currentUrl) {
        links.push({
          title: `Figuras de ${materialsData[mSlug].shortName} en ${locationsData[cSlug].cantonName}`,
          url,
          category: 'Local'
        });
      }
    });
  });

  // Red de Fauna en Materiales
  Object.keys(animalsData).forEach(aSlug => {
    ['yeso', 'resina'].forEach(mSlug => {
      const url = `/figura-${aSlug}-${mSlug}`;
      if (url !== currentUrl) {
        links.push({
          title: `Figura de ${animalsData[aSlug].name} en ${materialsData[mSlug].shortName}`,
          url,
          category: 'Fauna'
        });
      }
    });
  });

  // Red de Decoración por Estilo y Habitación
  Object.keys(stylesData).forEach(sSlug => {
    ['sala', 'jardin', 'oficina', 'dormitorio'].forEach(rSlug => {
      const url = `/decoracion-${sSlug}-${rSlug}`;
      if (url !== currentUrl) {
        links.push({
          title: `Decoración ${stylesData[sSlug].name.split('&')[0].trim()} para ${roomsData[rSlug].name}`,
          url,
          category: 'Decoración'
        });
      }
    });
  });

  // Red de Regalos por Ocasión
  Object.keys(occasionsData).forEach(oSlug => {
    const url = `/regalo-${oSlug}`;
    if (url !== currentUrl) {
      links.push({
        title: `Regalos para ${occasionsData[oSlug].name}`,
        url,
        category: 'Regalos'
      });
    }
  });

  // Red de Restauración
  Object.keys(restorationsData).forEach(rSlug => {
    const url = `/restauracion/${rSlug}`;
    if (url !== currentUrl) {
      links.push({
        title: restorationsData[rSlug].name,
        url,
        category: 'Restauración'
      });
    }
  });

  ['cartago', 'turrialba', 'san-jose', 'san-carlos'].forEach(cSlug => {
    const url = `/restauracion/${cSlug}`;
    if (url !== currentUrl) {
      links.push({
        title: `Restauración en ${locationsData[cSlug].cantonName}`,
        url,
        category: 'Restauración'
      });
    }
  });

  // Red de Clases de Pintura
  ['turrialba', 'cartago', 'san-jose', 'san-carlos'].forEach(cSlug => {
    const url = `/clases-pintura/${cSlug}`;
    if (url !== currentUrl) {
      links.push({
        title: `Clases de pintura en ${locationsData[cSlug].cantonName}`,
        url,
        category: 'Cursos'
      });
    }
  });

  return links;
}

/**
 * Devuelve un subconjunto curado de enlaces relevantes para un cluster temático
 */
export function getRelatedLinksForCluster(currentUrl: string, count: number = 8): InternalLinkItem[] {
  const allLinks = getSemanticInternalLinks(currentUrl);

  // Determinamos el cluster activo según la URL
  let targetCategory: InternalLinkItem['category'] = 'Local';
  if (currentUrl.includes('figura-') && !currentUrl.includes('figuras-')) targetCategory = 'Fauna';
  else if (currentUrl.includes('decoracion-')) targetCategory = 'Decoración';
  else if (currentUrl.includes('regalo-')) targetCategory = 'Regalos';
  else if (currentUrl.includes('restauracion/')) targetCategory = 'Restauración';
  else if (currentUrl.includes('clases-pintura/')) targetCategory = 'Cursos';

  // Mezclamos enlaces de la misma categoría + enlaces cruzados estratégicos
  const sameCategory = allLinks.filter(l => l.category === targetCategory && l.url !== currentUrl);
  const crossCategory = allLinks.filter(l => l.category !== targetCategory && l.category !== 'Pilares' && l.url !== currentUrl);
  const pillarLinks = allLinks.filter(l => l.category === 'Pilares');

  const selected: InternalLinkItem[] = [
    ...sameCategory.slice(0, 4),
    ...crossCategory.slice(0, 2),
    ...pillarLinks.slice(0, 2)
  ];

  return selected.slice(0, count);
}
