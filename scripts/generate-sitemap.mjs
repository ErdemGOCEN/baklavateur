import { writeFile } from 'node:fs/promises';
import { products } from '../src/data/products.js';
import { getLocalizedPath, supportedLanguages } from '../src/routes/localizedRoutes.js';

const baseUrl = 'https://baklavateur.ch';
const staticKeys = ['home', 'products', 'about', 'contact'];
const urls = [];

for (const language of supportedLanguages) {
  for (const key of staticKeys) {
    urls.push({ loc: `${baseUrl}${getLocalizedPath(key, language)}`, priority: key === 'home' ? '1.0' : '0.8' });
  }
  for (const product of products) {
    urls.push({ loc: `${baseUrl}${getLocalizedPath('product', language, product.slug)}`, priority: '0.7' });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({ loc, priority }) => `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8');
console.log(`Generated sitemap with ${urls.length} URLs.`);
