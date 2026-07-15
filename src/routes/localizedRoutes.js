export const supportedLanguages = ['tr', 'fr', 'de', 'en'];

export const routeSegments = {
  home: { tr: '', fr: '', de: '', en: '' },
  products: { tr: 'urunler', fr: 'produits', de: 'produkte', en: 'products' },
  product: { tr: 'urun', fr: 'produit', de: 'produkt', en: 'product' },
  about: { tr: 'hakkimizda', fr: 'a-propos', de: 'ueber-uns', en: 'about-us' },
  contact: { tr: 'iletisim', fr: 'contact', de: 'kontakt', en: 'contact' },
};

export const getLocalizedPath = (key, language = 'tr', slug = '') => {
  const lang = supportedLanguages.includes(language) ? language : 'tr';
  const segment = routeSegments[key]?.[lang] ?? '';
  return `/${lang}${segment ? `/${segment}` : ''}${slug ? `/${slug}` : ''}`;
};

export const resolveRouteKey = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  const lang = supportedLanguages.includes(parts[0]) ? parts[0] : 'tr';
  const segment = parts[1] || '';
  const slug = parts[2] || '';
  const key = Object.entries(routeSegments).find(([, values]) => values[lang] === segment)?.[0] || 'home';
  return { lang, key, slug };
};
