import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    app.use(compression());
    const serveStatic = (await import('serve-static')).default;
    app.use(serveStatic(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  app.use('{*path}', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template, render;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const { html: appHtml, meta, isNotFound } = render(url);

      const headTags = `
        <title>${meta.title}</title>
        <meta name="description" content="${meta.description}" />
        <link rel="canonical" href="${meta.canonical}" />

        <!-- Open Graph -->
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${meta.title}" />
        <meta property="og:description" content="${meta.description}" />
        <meta property="og:url" content="${meta.canonical}" />
        <meta property="og:image" content="${meta.image}" />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${meta.title}" />
        <meta name="twitter:description" content="${meta.description}" />
        <meta name="twitter:image" content="${meta.image}" />

        <!-- Structured Schema Markup JSON-LD -->
        <script type="application/ld+json">
          ${JSON.stringify(meta.schema || {})}
        </script>
      `;

      let finalHtml = template.replace('<!--app-head-->', headTags);
      finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      res.status(isNotFound ? 404 : 200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

createServer();
