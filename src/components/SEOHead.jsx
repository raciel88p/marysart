import React, { useEffect } from 'react';
import { coursesData } from './CourseDetailPage';
import { servicesData } from './ServiceDetailPage';

const BASE_URL = 'https://resinaartmary.cr';

export const seoMetaData = {
  home: {
    title: 'Resina Art & Mary | Cursos de Velas Artesanales y Pintura en Costa Rica',
    description: 'Aprende elaboración de velas artesanales de soya, pintura acrílica y pátinas en Turrialba, Costa Rica. Impartido por Maria. ¡Reserva tu cupo!',
    canonical: `${BASE_URL}/`,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Resina Art & Mary',
      'image': 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200',
      'telephone': '+50660367249',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Urbanización Jorge Debravo',
        'addressLocality': 'Turrialba y San Carlos',
        'addressRegion': 'Cartago',
        'addressCountry': 'CR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '9.9046',
        'longitude': '-83.6826'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Wednesday'],
          'opens': '09:00',
          'closes': '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Friday'],
          'opens': '14:00',
          'closes': '17:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday'],
          'opens': '09:00',
          'closes': '13:00'
        }
      ],
      'priceRange': '$$'
    }
  },
  catalog: {
    title: 'Catálogo de Cursos y Talleres | Resina Art & Mary Costa Rica',
    description: 'Explora nuestros cursos presenciales de velas artesanales, pintura en frío y técnicas de pátinas en Costa Rica. Incluye insumos y guía personalizada.',
    canonical: `${BASE_URL}/cursos`,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Catálogo de Cursos de Resina Art & Mary',
      'itemListElement': Object.keys(coursesData).map((id, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `${BASE_URL}/cursos/${id}`,
        'name': coursesData[id].title
      }))
    }
  },
  pieces: {
    title: 'Catálogo de Piezas en Bizcocho y Yeso | Resina Art & Mary',
    description: 'Catálogo de piezas cerámicas en frío y yeso listas para pintar. Compra tu pieza e incluye clase de pintura o pátina totalmente GRATIS.',
    canonical: `${BASE_URL}/piezas`,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1200',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Piezas en Bizcocho para Pintura',
      'description': 'Catálogo de piezas decorativas con clase de pintura gratis'
    }
  },
  services: {
    title: 'Servicios de Restauración Sacra y Arte en Resina | Resina Art & Mary',
    description: 'Restauración profesional de imágenes sacras, vírgenes y pesebres, y confección de piezas de resina personalizadas a tu gusto en Costa Rica.',
    canonical: `${BASE_URL}/servicios`,
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': 'Servicios de Restauración Sacra y Arte en Resina Personalizado',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'Resina Art & Mary',
        'telephone': '+50660367249'
      },
      'areaServed': 'Costa Rica',
      'description': 'Servicios profesionales de restauración de imágenes religiosas y encargo de piezas artesanales en resina.'
    }
  },
  '404': {
    title: 'Página No Encontrada (404) | Resina Art & Mary',
    description: 'La página solicitada no está disponible. Explora nuestros cursos de velas y pintura en Costa Rica.',
    canonical: `${BASE_URL}/404`,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200'
  }
};

export function getMetaData(view, activeId) {
  if (view === 'course-detail' && activeId && coursesData[activeId]) {
    const course = coursesData[activeId];
    const instructorName = typeof course.instructor === 'object' ? course.instructor.name : course.instructor;
    return {
      title: `${course.title} | Resina Art & Mary Costa Rica`,
      description: `${course.subtitle}. Impartido por ${instructorName} en ${course.location}. Todos los materiales incluidos.`,
      canonical: `${BASE_URL}/cursos/${course.id}`,
      image: course.image,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': course.title,
        'description': course.subtitle,
        'provider': {
          '@type': 'Organization',
          'name': 'Resina Art & Mary',
          'sameAs': BASE_URL
        },
        'instructor': {
          '@type': 'Person',
          'name': instructorName
        },
        'offers': {
          '@type': 'Offer',
          'price': course.price.replace(/[^0-9]/g, '') || '0',
          'priceCurrency': 'CRC',
          'availability': 'https://schema.org/InStock'
        }
      }
    };
  }

  if (view === 'service-detail' && activeId && servicesData[activeId]) {
    const service = servicesData[activeId];
    return {
      title: `${service.title} | Resina Art & Mary Costa Rica`,
      description: `${service.subtitle}. ${service.description.substring(0, 140)}...`,
      canonical: `${BASE_URL}/servicios/${service.id}`,
      image: service.bannerImage,
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': service.title,
        'description': service.subtitle,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Resina Art & Mary',
          'telephone': '+50660367249'
        },
        'areaServed': 'Costa Rica'
      }
    };
  }

  return seoMetaData[view] || seoMetaData.home;
}

export default function SEOHead({ view, activeId }) {
  const meta = getMetaData(view, activeId);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Title
    document.title = meta.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // Canonical URL link tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', meta.canonical);

    // Helper for og meta tags
    const setOgMeta = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    setOgMeta('og:title', meta.title);
    setOgMeta('og:description', meta.description);
    setOgMeta('og:url', meta.canonical);
    if (meta.image) {
      setOgMeta('og:image', meta.image);
    }
  }, [view, activeId, meta]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(meta.schema || {}) }}
      />
    </>
  );
}
