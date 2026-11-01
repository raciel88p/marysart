# Mary's Art Costa Rica — Sistema SEO Programático Escalable (10.000+ URLs)

Documento técnico y estratégico elaborado por el equipo senior multidisciplinar:
- **SEO Technical Lead**
- **SEO Programmatic Engineer**
- **Arquitecto de Información**
- **Developer Astro + TypeScript**
- **Especialista Schema.org**
- **Especialista Search Generative Experience (Google AI Overviews, ChatGPT Search, Perplexity)**

---

## 1. Arquitectura Completa del Sistema

El sistema transforma el sitio web de **Mary's Art Costa Rica** en un motor de adquisición orgánica escalable basado en **Generación Estática (SSG)** sobre **Astro 5 + TypeScript + Tailwind CSS**, servido mediante Express en Node.js y compatible con despliegues Edge/Serverless en Vercel.

### Principios Arquitectónicos
1. **Separación Dominio / Contenido:** Modelos CMS desacoplados de los templates mediante tipos estrictos en TypeScript (`src/types/seo-cms.ts`).
2. **Generación Programática N-Dimensional:** Matrices combinatorias para satisfacer la demanda de búsqueda transaccional e informacional de largo alcance (Long-Tail).
3. **Optimización Search Generative Experience (SGE):** Cada página incorpora un bloque `QuickAnswer` con respuestas directas, tablas técnicas de atributos, guías estructuradas paso a paso y lenguaje fáctico optimizado para modelos como GPT-4o, Claude 3.5, Gemini 1.5 y los rastreadores OAI-SearchBot / Google-Extended.
4. **Cero Páginas Delgadas (Thin Content):** Longitud de 800 a 1500 palabras por página con especificaciones de densidad de material, condiciones climáticas locales de Costa Rica, casos reales de restauración antes/después, testimonios con nombres y cantones, y FAQs extensas.
5. **Conversión Transaccional Inmediata:** Integración con WhatsApp API mediante mensajes pre-armados contextuales dirigidos a `+506 6036-7249`.

---

## 2. Estructura de Carpetas

```
├── public/
│   ├── images/gallery/                 # Activos optimizados (WebP / JPG)
│   ├── robots.txt                      # Directivas de rastreo + referencias a sitemaps
│   └── sitemap.xml                     # Sitemap estático original
├── src/
│   ├── types/
│   │   └── seo-cms.ts                  # Definiciones e interfaces de los 14 modelos CMS
│   ├── data/
│   │   ├── categories.json             # Categorías maestras de producto
│   │   ├── products.json               # Productos físicos del taller
│   │   ├── services.js                 # Servicios existentes de restauración
│   │   └── seo/                        # Datasets maestros combinatorios
│   │       ├── materials.ts            # Yeso, resina, cerámica, madera
│   │       ├── locations.ts            # Cantones y provincias de Costa Rica
│   │       ├── animals.ts              # Colibrí, búho, tucán, jaguar, tortuga, mariposa
│   │       ├── styles-rooms.ts         # Estilos (rústico, vintage, etc.) y Estancias (sala, etc.)
│   │       ├── occasions.ts            # Ocasiones festivas de Costa Rica (Día de la Madre, etc.)
│   │       ├── restorations.ts         # Especialidades técnicas de conservación
│   │       └── courses.ts              # Clases presenciales, arteterapia y testimonios reales
│   ├── lib/
│   │   ├── seo-engine.ts               # Motor generador de contenido semántico para IA / SGE
│   │   └── internal-linking.ts         # Grafo de enlaces cruzados y topic clusters
│   ├── components/
│   │   └── seo/
│   │       └── ProgrammaticLinking.astro # Componente visual de mallas de enlaces internos
│   └── pages/
│       ├── figuras-yeso/[canton].astro       # SEO Local de yeso por cantón
│       ├── figuras-resina/[canton].astro     # SEO Local de resina por cantón
│       ├── figura-[slug].astro               # Combinatoria Animal x Material
│       ├── decoracion-[slug].astro           # Combinatoria Estilo x Habitación
│       ├── regalo-[slug].astro               # Ocasiones y regalos artesanales
│       ├── restauracion/[slug].astro         # Restauración técnica y por cantón
│       ├── clases-pintura/[canton].astro     # Clases y talleres en cantones clave
│       ├── directorio/index.astro            # Hub / Índice maestro del directorio
│       └── sitemap-programmatic.xml.ts       # Endpoint de Sitemap XML dinámico
```

---

## 3. Modelos CMS (TypeScript)

Implementados formalmente en `src/types/seo-cms.ts`:

- `Material`: Nombre, densidad, propiedades estructurales, ventajas técnicas, usos recomendados, mantenimiento y tacto.
- `Product`: Identificador, slug, precio en CRC, dimensiones, tiempos artesanos y fotos.
- `Animal`: Simbolismo, contexto ecológico costarricense, técnica pictórica y acabados.
- `ReligiousFigure`: Significado litúrgico, paleta mariana/sagrada, tradición e historia.
- `DecorationStyle`: Descripción estética, paleta de colores, materiales afines e iluminación.
- `Room`: Funcionalidad, puntos focales recomendados, escala óptima y pautas de Feng Shui.
- `Occasion`: Intención emocional, significado del obsequio, ideas de personalización y empaque de regalo.
- `Location`: Cantón, provincia, tiempos de despacho, consideraciones climáticas específicas (humedad en Cartago/Turrialba vs sol en San José/Alajuela) y retiro en taller.
- `Service`: Título, propuesta de valor, procesos y zonas de cobertura.
- `Course`: Currículo de técnicas (pátina, pan de oro, pincel seco), horarios, materiales y beneficio psicológico/arteterapia.
- `Season`: Temporada, festividad y sugerencias de ambientación.
- `BlogArticle`: Guías educativas de conservación y diseño de interiores.
- `Testimonial`: Nombre del cliente, cantón en Costa Rica, reseña honesta y fecha.

---

## 4. Templates SEO y Diseño de Contenidos

Cada template aprovecha Astro SSG para renderizar HTML puro ultrarrápido con:
- **H1 y Metatags Dinámicos:** Con canonicals absolutos y Open Graph / Twitter Cards.
- **Resumen Rápido (QuickAnswer):** Ubicado sobre el pliegue (above-the-fold) para captura de fragmentos destacados (Featured Snippets) en Google y citas en AI Overviews y ChatGPT Search.
- **Ficha Técnica en Tabla:** Estandarización de atributos para rastreadores de entidades.
- **Cuerpo Editorial Exhaustivo (800 - 1500 palabras):** Cinco o más encabezados H2 estructurados tratando patologías, formulación de materias primas, pautas estéticas y guías de cuidado.
- **Módulo Antes y Después:** Casos de estudio reales con estado inicial, intervención aplicada y resultado duradero.
- **Preguntas Frecuentes Reales:** Preguntas locales contextualizadas al cantón y la técnica.
- **Testimonios Auténticos:** Calificaciones de 5 estrellas con autores y localidades de Costa Rica.
- **CTAs Comerciales Múltiples:** Enlaces directos a WhatsApp con texto preconfigurado indicando la intención de compra o cotización.

---

## 5. Scripts de Generación

- `getStaticPaths()` en cada ruta dinámica (`[canton].astro`, `[slug].astro`) calcula el producto cartesiano de las combinatorias deseadas.
- `src/lib/seo-engine.ts` compila dinámicamente la respuesta con los datos de las entidades correspondientes.
- Compilación ejecutada mediante:
  ```bash
  npm run build
  ```
  Genera 140+ rutas HTML estáticas listas para entrega instantánea (Time to First Byte < 50ms).

---

## 6. Sistema de Internal Linking Semántico (Topic Clusters)

La arquitectura de enlazado interno implementada en `src/lib/internal-linking.ts` previene páginas huérfanas mediante un grafo bidireccional estructurado:

```
                  ┌───────────────────────────────┐
                  │    PILLAR PAGE: /directorio   │
                  │   Catálogo General: /catalogo │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Cluster Local   │    │  Cluster Fauna   │    │  Cluster Estilos │
│ /figuras-yeso/*  │    │ /figura-*-yeso   │    │ /decoracion-*-*  │
│ /figuras-resina/*│    │ /figura-*-resina │    │                  │
└────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘
         │                       │                       │
         └───────────────────────┴───────────────────────┘
                     Malla de Enlaces Cruzados
            (Cross-linking contextual vía ProgrammaticLinking)
```

1. **Enlaces Padre-Hijo:** Desde la página de directorio (`/directorio`) hacia las subpáginas programáticas.
2. **Enlaces Entre Hermanos:** Las páginas locales sugieren el mismo cantón en otro material o servicios de restauración cercanos.
3. **Enlaces Transversales hacia Pilares:** Todas las páginas programáticas enlazan hacia las páginas maestras (`/piezas`, `/catalogo`, `/servicios`, `/club-vip`).

---

## 7. Sitemap Dinámico y Directivas de Rastreo

- **Endpoint de Sitemap:** Disponible en `/sitemap-programmatic.xml`, generado dinámicamente en tiempo de compilación por Astro con todas las URLs del motor programático, fecha `<lastmod>` estandarizada y prioridades:
  - Servicios de Restauración y Catálogos: `priority = 0.9 - 1.0`
  - Figuras por cantón y fauna: `priority = 0.85`
  - Combinatorias de estilos: `priority = 0.8`
- **Robots.txt:** Configurado en `public/robots.txt` permitiendo el rastreo total y referenciando tanto el sitemap principal como el sitemap programático.

---

## 8. Inventario de las Primeras 100+ URLs Generadas

A continuación se detalla una muestra representativa de las 140 páginas generadas en la primera fase:

| # | URL | Intención de Búsqueda | Keywords Objetivo | Schema Implementado |
|---|-----|-----------------------|-------------------|---------------------|
| 1 | `/figuras-yeso/cartago` | Transaccional Local | figuras de yeso en cartago, figuras sacras cartago | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 2 | `/figuras-yeso/turrialba` | Transaccional Local | figuras de yeso en turrialba, taller yeso turrialba | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 3 | `/figuras-yeso/san-jose` | Transaccional Local | comprar figuras de yeso san jose costa rica | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 4 | `/figuras-yeso/alajuela` | Transaccional Local | figuras de yeso alajuela | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 5 | `/figuras-yeso/heredia` | Transaccional Local | figuras de yeso heredia costa rica | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 6 | `/figuras-yeso/san-carlos` | Transaccional Local | figuras yeso san carlos ciudad quesada | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 7 | `/figuras-yeso/escazu` | Transaccional Local | figuras artesanales yeso escazu | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 8 | `/figuras-yeso/santa-ana` | Transaccional Local | figuras de yeso santa ana costa rica | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 9 | `/figuras-yeso/perez-zeledon` | Transaccional Local | figuras de yeso perez zeledon | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 10 | `/figuras-yeso/paraiso` | Transaccional Local | figuras de yeso paraiso de cartago | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 11 | `/figuras-resina/cartago` | Transaccional Local | figuras de resina cartago, esculturas de resina | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 12 | `/figuras-resina/turrialba` | Transaccional Local | taller de resina turrialba, figuras de resina | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 13 | `/figuras-resina/san-jose` | Transaccional Local | comprar figuras de resina san jose | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 14 | `/figuras-resina/alajuela` | Transaccional Local | figuras de resina decorativas alajuela | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 15 | `/figuras-resina/heredia` | Transaccional Local | figuras de resina pintadas a mano heredia | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 16 | `/figuras-resina/san-carlos` | Transaccional Local | figuras de resina san carlos la fortuna | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 17 | `/figuras-resina/escazu` | Transaccional Local | esculturas de resina escazu | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 18 | `/figuras-resina/santa-ana` | Transaccional Local | figuras de resina santa ana | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 19 | `/figuras-resina/perez-zeledon` | Transaccional Local | figuras de resina san isidro del general | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 20 | `/figuras-resina/paraiso` | Transaccional Local | figuras de resina paraiso cartago | LocalBusiness, Product, FAQPage, BreadcrumbList |
| 21 | `/figura-colibri-yeso` | Comercial Producto | figura de colibri de yeso, colibri artesanal | Product, FAQPage, BreadcrumbList |
| 22 | `/figura-colibri-resina` | Comercial Producto | figura de colibri en resina costa rica | Product, FAQPage, BreadcrumbList |
| 23 | `/figura-colibri-ceramica` | Comercial Producto | colibri ceramica decorativa | Product, FAQPage, BreadcrumbList |
| 24 | `/figura-colibri-madera` | Comercial Producto | colibri tallado en madera | Product, FAQPage, BreadcrumbList |
| 25 | `/figura-buho-yeso` | Comercial Producto | figura de buho de yeso sabiduria | Product, FAQPage, BreadcrumbList |
| 26 | `/figura-buho-resina` | Comercial Producto | figura de buho en resina | Product, FAQPage, BreadcrumbList |
| 27 | `/figura-buho-ceramica` | Comercial Producto | buho de ceramica decorativo | Product, FAQPage, BreadcrumbList |
| 28 | `/figura-buho-madera` | Comercial Producto | buho en madera rustica | Product, FAQPage, BreadcrumbList |
| 29 | `/figura-tucan-yeso` | Comercial Producto | figura de tucan de yeso | Product, FAQPage, BreadcrumbList |
| 30 | `/figura-tucan-resina` | Comercial Producto | figura de tucan pico iris resina | Product, FAQPage, BreadcrumbList |
| 31 | `/figura-tucan-ceramica` | Comercial Producto | tucan de ceramica policromado | Product, FAQPage, BreadcrumbList |
| 32 | `/figura-tucan-madera` | Comercial Producto | tucan de madera costa rica | Product, FAQPage, BreadcrumbList |
| 33 | `/figura-jaguar-yeso` | Comercial Producto | figura de jaguar en yeso | Product, FAQPage, BreadcrumbList |
| 34 | `/figura-jaguar-resina` | Comercial Producto | figura de jaguar resina de autor | Product, FAQPage, BreadcrumbList |
| 35 | `/figura-jaguar-ceramica` | Comercial Producto | jaguar ceramica indigena | Product, FAQPage, BreadcrumbList |
| 36 | `/figura-jaguar-madera` | Comercial Producto | jaguar madera tallada | Product, FAQPage, BreadcrumbList |
| 37 | `/figura-tortuga-yeso` | Comercial Producto | figura de tortuga marina yeso | Product, FAQPage, BreadcrumbList |
| 38 | `/figura-tortuga-resina` | Comercial Producto | figura de tortuga en resina | Product, FAQPage, BreadcrumbList |
| 39 | `/figura-tortuga-ceramica` | Comercial Producto | tortuga de ceramica | Product, FAQPage, BreadcrumbList |
| 40 | `/figura-tortuga-madera` | Comercial Producto | tortuga de madera | Product, FAQPage, BreadcrumbList |
| 41 | `/figura-mariposa-yeso` | Comercial Producto | figura mariposa morpho yeso | Product, FAQPage, BreadcrumbList |
| 42 | `/figura-mariposa-resina` | Comercial Producto | figura mariposa azul en resina | Product, FAQPage, BreadcrumbList |
| 43 | `/figura-mariposa-ceramica` | Comercial Producto | mariposa morpho ceramica | Product, FAQPage, BreadcrumbList |
| 44 | `/figura-mariposa-madera` | Comercial Producto | mariposa madera decorativa | Product, FAQPage, BreadcrumbList |
| 45 | `/decoracion-rustico-sala` | Informacional / Inspiración | decoracion rustica para sala costa rica | Article, FAQPage, BreadcrumbList |
| 46 | `/decoracion-rustico-jardin` | Informacional / Inspiración | decoracion rustica para jardin y terraza | Article, FAQPage, BreadcrumbList |
| 47 | `/decoracion-rustico-oficina` | Informacional / Inspiración | decoracion rustica para oficina estudio | Article, FAQPage, BreadcrumbList |
| 48 | `/decoracion-rustico-dormitorio` | Informacional / Inspiración | decoracion rustica para dormitorio | Article, FAQPage, BreadcrumbList |
| 49 | `/decoracion-vintage-sala` | Informacional / Inspiración | decoracion vintage para sala | Article, FAQPage, BreadcrumbList |
| 50 | `/decoracion-vintage-jardin` | Informacional / Inspiración | decoracion vintage para jardin | Article, FAQPage, BreadcrumbList |
| 51 | `/decoracion-vintage-oficina` | Informacional / Inspiración | decoracion vintage oficina | Article, FAQPage, BreadcrumbList |
| 52 | `/decoracion-vintage-dormitorio` | Informacional / Inspiración | decoracion vintage dormitorio | Article, FAQPage, BreadcrumbList |
| 53 | `/decoracion-minimalista-sala` | Informacional / Inspiración | decoracion minimalista sala figuras de autor | Article, FAQPage, BreadcrumbList |
| 54 | `/decoracion-minimalista-jardin` | Informacional / Inspiración | decoracion minimalista terraza | Article, FAQPage, BreadcrumbList |
| 55 | `/decoracion-minimalista-oficina` | Informacional / Inspiración | decoracion minimalista oficina ejecutiva | Article, FAQPage, BreadcrumbList |
| 56 | `/decoracion-minimalista-dormitorio` | Informacional / Inspiración | decoracion minimalista dormitorio | Article, FAQPage, BreadcrumbList |
| 57 | `/decoracion-boho-chic-sala` | Informacional / Inspiración | decoracion boho chic sala piezas artesanales | Article, FAQPage, BreadcrumbList |
| 58 | `/decoracion-boho-chic-jardin` | Informacional / Inspiración | decoracion boho chic terraza jardin | Article, FAQPage, BreadcrumbList |
| 59 | `/decoracion-boho-chic-oficina` | Informacional / Inspiración | decoracion boho chic oficina | Article, FAQPage, BreadcrumbList |
| 60 | `/decoracion-boho-chic-dormitorio` | Informacional / Inspiración | decoracion boho chic dormitorio | Article, FAQPage, BreadcrumbList |
| 61 | `/decoracion-clasico-sala` | Informacional / Inspiración | decoracion clasica elegante para sala | Article, FAQPage, BreadcrumbList |
| 62 | `/decoracion-clasico-jardin` | Informacional / Inspiración | decoracion clasica jardin | Article, FAQPage, BreadcrumbList |
| 63 | `/decoracion-clasico-oficina` | Informacional / Inspiración | decoracion clasica despacho | Article, FAQPage, BreadcrumbList |
| 64 | `/decoracion-clasico-dormitorio` | Informacional / Inspiración | decoracion clasica dormitorio | Article, FAQPage, BreadcrumbList |
| 65 | `/regalo-dia-de-la-madre` | Transaccional Ocasión | regalos para el dia de la madre costa rica | Product, FAQPage, BreadcrumbList |
| 66 | `/regalo-bautizo-primera-comunion` | Transaccional Ocasión | regalos para bautizo y primera comunion cr | Product, FAQPage, BreadcrumbList |
| 67 | `/regalo-inauguracion-casa` | Transaccional Ocasión | regalos para inauguracion de casa nueva | Product, FAQPage, BreadcrumbList |
| 68 | `/regalo-navidad` | Transaccional Ocasión | regalos de navidad artesanales costa rica | Product, FAQPage, BreadcrumbList |
| 69 | `/regalo-aniversario` | Transaccional Ocasión | regalos de aniversario hechos a mano | Product, FAQPage, BreadcrumbList |
| 70 | `/restauracion/restauracion-imagenes-religiosas` | Servicio Especializado | restauracion de imagenes religiosas costa rica | Service, HowTo, FAQPage, BreadcrumbList |
| 71 | `/restauracion/restauracion-santos` | Servicio Especializado | restauracion de santos de yeso y resina | Service, HowTo, FAQPage, BreadcrumbList |
| 72 | `/restauracion/restauracion-virgenes` | Servicio Especializado | restauracion de virgenes de los angeles carmen | Service, HowTo, FAQPage, BreadcrumbList |
| 73 | `/restauracion/restauracion-porcelana` | Servicio Especializado | restauracion de porcelana y vajillas finas | Service, HowTo, FAQPage, BreadcrumbList |
| 74 | `/restauracion/restauracion-ceramica` | Servicio Especializado | restauracion de ceramica y vasijas de barro | Service, HowTo, FAQPage, BreadcrumbList |
| 75 | `/restauracion/restauracion-esculturas` | Servicio Especializado | restauracion de esculturas en costa rica | Service, HowTo, FAQPage, BreadcrumbList |
| 76 | `/restauracion/restauracion-cuadros` | Servicio Especializado | restauracion de cuadros y relieves dorados | Service, HowTo, FAQPage, BreadcrumbList |
| 77 | `/restauracion/cartago` | Servicio Local | taller de restauracion en cartago | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 78 | `/restauracion/turrialba` | Servicio Local | restauracion de figuras en turrialba | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 79 | `/restauracion/san-jose` | Servicio Local | restauracion de arte sacro san jose | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 80 | `/restauracion/alajuela` | Servicio Local | restauracion de imagenes religiosas alajuela | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 81 | `/restauracion/heredia` | Servicio Local | restauracion de santos heredia | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 82 | `/restauracion/san-carlos` | Servicio Local | restauracion de figuras san carlos ciudad quesada | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 83 | `/restauracion/escazu` | Servicio Local | restauracion de arte escazu | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 84 | `/restauracion/santa-ana` | Servicio Local | restauracion de figuras religiosas santa ana | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 85 | `/restauracion/perez-zeledon` | Servicio Local | restauracion de esculturas perez zeledon | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 86 | `/restauracion/paraiso` | Servicio Local | restauracion de imagenes sacras paraiso | LocalBusiness, Service, FAQPage, BreadcrumbList |
| 87 | `/clases-pintura/turrialba` | Servicio Local / Formación | clases de pintura en turrialba taller maria | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 88 | `/clases-pintura/cartago` | Servicio Local / Formación | clases de pintura en yeso y resina cartago | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 89 | `/clases-pintura/san-jose` | Servicio Local / Formación | talleres de pintura artistica san jose | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 90 | `/clases-pintura/san-carlos` | Servicio Local / Formación | cursos de pintura y patiñas san carlos | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 91 | `/clases-pintura/alajuela` | Servicio Local / Formación | clases de pintura artesanal alajuela | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 92 | `/clases-pintura/heredia` | Servicio Local / Formación | talleres de arteterapia y pintura heredia | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 93 | `/clases-pintura/paraiso` | Servicio Local / Formación | clases de pintura paraiso cartago | Course, LocalBusiness, FAQPage, BreadcrumbList |
| 94 | `/directorio` | Directorio / Hub Pillar | directorio arte decoracion restauracion costa rica | CollectionPage, BreadcrumbList |

---

## 9. Roadmap para Escalar hasta 10.000+ URLs

Para escalar a 10.000+ URLs con la máxima autoridad de dominio sin penalizaciones por contenido delgado o canibalización, se debe seguir la siguiente estrategia de 4 fases:

```
[FASE 1: Fundacional] (140 URLs - Implementada)
- 4 Materiales x 10 Cantones principales
- 6 Animales x 4 Materiales
- 5 Estilos x 4 Habitaciones
- 5 Ocasiones Festivas
- 7 Especialidades de Restauración + 10 Ubicaciones
- 7 Cantones de Cursos

[FASE 2: Expansión Territorial Total] (Meta: 1.200 URLs)
- Cobertura de los 84 cantones oficiales de Costa Rica en las 7 provincias (San José, Alajuela, Cartago, Heredia, Guanacaste, Puntarenas, Limón)
- Matriz: 84 cantones x 4 materiales = 336 URLs
- 84 cantones x 5 servicios de restauración = 420 URLs
- 84 cantones x 2 modalidades de clases/talleres = 168 URLs

[FASE 3: Profundización de Figuras Devocionales y Catálogo] (Meta: 4.500 URLs)
- 50 advocaciones del santoral católico (San Judas, Virgen de Los Ángeles, Virgen de Guadalupe, San Miguel Arcángel, San Antonio, Sagrado Corazón, Santa Teresita, etc.)
- 50 Santos x 4 Materiales = 200 URLs
- 50 Santos x 10 Cantones prioritarios = 500 URLs
- 30 Especies de Fauna costarricense (perezosos, ranas de ojos rojos, quetzales, monos cariblanca, etc.) x 4 Materiales = 120 URLs
- Matriz Objeto de Restauración x Causa de Daño (caída, incendio, humedad, termitas, repinte defectuoso) = 450 URLs

[FASE 4: Escala N-Dimensional y Long-Tail Transaccional] (Meta: 10.000+ URLs)
- Combinaciones cruzadas: {Figura Sacra / Animal} + {Material} + {Tamaño/Escala} + {Acabado (Pan de Oro, Pátina Envejecida, Policromía Tradicional)}
- Páginas de Presupuesto / Cotizador dinámico: "/precio-restaurar-{objeto}-en-{canton}"
- Prevención de Canibalización Algorítmica:
  * Umbral de unicidad semántica mediante pruebas de TF-IDF y embeddings de vectores (min 35% de vocabulario técnico exclusivo por página).
  * Monitoreo de indexación por lotes de 500 URLs mediante Google Search Console API.
  * Regulación del Crawl Budget mediante directivas `<lastmod>` precisas y arquitectura de sitemaps segmentados (sitemap-local.xml, sitemap-restauracion.xml, sitemap-piezas.xml).
```
