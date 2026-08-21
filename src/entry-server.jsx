import React, { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App, { parseRoute } from './App.jsx'
import { getMetaData } from './components/SEOHead.jsx'

export function render(url) {
  const route = parseRoute(url);
  const meta = getMetaData(route.view, route.courseId);

  const html = renderToString(
    <StrictMode>
      <App initialPath={url} />
    </StrictMode>
  );

  return { html, meta, isNotFound: route.isNotFound };
}
