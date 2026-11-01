/**
 * Modelos de datos para el motor SEO Programático de Mary's Art Costa Rica.
 * Definición estricta de entidades para combinación dinámica n-dimensional.
 */

export interface Material {
  id: string;
  slug: string;
  name: string; // ej. "Yeso cerámico", "Resina poliéster", "Cerámica esmaltada", "Madera curada"
  shortName: string; // "yeso", "resina", "cerámica", "madera"
  description: string;
  density: string;
  advantages: string[];
  recommendedUses: string[];
  maintenanceTips: string[];
  tactileFeel: string;
  averageWeight: string;
}

export interface Animal {
  id: string;
  slug: string;
  name: string; // ej. "Colibrí", "Búho", "Tucán", "Jaguar", "Tortuga", "Mariposa Morpho"
  pluralName: string;
  symbolism: string;
  costaRicanContext: string;
  artisanDetail: string;
  popularFinishes: string[];
}

export interface ReligiousFigure {
  id: string;
  slug: string;
  name: string; // ej. "Virgen de los Ángeles", "San Judas Tadeo", "Sagrada Familia", "San Miguel Arcángel"
  devotionTitle: string;
  liturgicalMeaning: string;
  typicalColors: string[];
  historicalRoots: string;
  restorationNotes: string;
}

export interface DecorationStyle {
  id: string;
  slug: string;
  name: string; // ej. "Rústico", "Vintage", "Minimalista", "Boho Chic", "Clásico Colonial"
  aestheticDescription: string;
  colorPalette: string[];
  pairingMaterials: string[];
  lightingAdvice: string;
}

export interface Room {
  id: string;
  slug: string;
  name: string; // ej. "Sala de Estar", "Jardín / Terraza", "Oficina / Estudio", "Dormitorio Principal"
  functionality: string;
  focalPoints: string[];
  recommendedScale: string;
  fengShuiAdvice: string;
}

export interface Occasion {
  id: string;
  slug: string;
  name: string; // ej. "Día de la Madre", "Bautizo / Primera Comunión", "Inauguración de Casa", "Navidad", "Aniversario"
  emotionalIntent: string;
  giftSignificance: string;
  customizationIdeas: string[];
  packagingSuggestion: string;
}

export interface Location {
  id: string;
  cantonSlug: string; // ej. "cartago", "turrialba", "san-jose", "alajuela", "heredia", "san-carlos", "escazu", "santa-ana", "perez-zeledon"
  cantonName: string;
  province: string;
  deliveryEstimate: string;
  workshopDistanceNote: string;
  localPickupAvailable: boolean;
  climateConsiderations: string; // ej. humedad en Turrialba / Cartago vs sol de San José
}

export interface RestorationType {
  id: string;
  slug: string;
  name: string; // ej. "Restauración de Imágenes Religiosas", "Restauración de Porcelana", "Restauración de Santos"
  category: 'sacra' | 'decorativa' | 'ceramica' | 'escultura' | 'cuadros';
  commonProblems: string[];
  stepByStepProcess: Array<{ step: number; title: string; detail: string }>;
  materialsUsed: string[];
  estimatedTurnaround: string;
  preservationTips: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  coverageArea: string;
}

export interface Course {
  id: string;
  slug: string;
  name: string; // ej. "Clases de Pintura en Resina", "Taller de Arteterapia y Pátinas"
  audience: string; // "principiantes", "adultos mayores", "familias", "emprendedores"
  curriculum: string[];
  schedule: string;
  includedMaterials: string[];
  benefitPsychological: string;
}

export interface Season {
  id: string;
  slug: string;
  name: string;
  theme: string;
  decorTips: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  serviceOrProduct: string;
  date: string;
}

export interface ProgrammaticPageData {
  slug: string;
  url: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  breadcrumb: Array<{ name: string; url: string }>;
  heroSummary: string;
  quickAnswer: string; // Optimizado para Google AI Overviews & Perplexity / ChatGPT Search
  tableAttributes: Array<{ key: string; value: string }>;
  editorialContentHtml: string;
  processSteps?: Array<{ step: number; title: string; detail: string }>;
  materialsInfo?: string[];
  beforeAfterCase?: {
    caseTitle: string;
    problem: string;
    solution: string;
    result: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  testimonials: Testimonial[];
  relatedLinks: Array<{ label: string; url: string; category: string }>;
  cta: {
    title: string;
    subtitle: string;
    whatsappMessage: string;
    buttonText: string;
  };
  schema: object;
}
