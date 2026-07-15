import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/siteConfig';
import { getLocalizedPath, resolveRouteKey, supportedLanguages } from '../routes/localizedRoutes';

const localeMap = { tr: 'tr_TR', fr: 'fr_CH', de: 'de_CH', en: 'en_CH' };

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function Seo({
  title,
  description,
  keywords = [],
  image = siteConfig.defaultOgImage,
  type = 'website',
  noindex = false,
  schema = [],
}) {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const language = i18n.language.slice(0, 2);

  useEffect(() => {
    const resolved = resolveRouteKey(location.pathname);
    const pageTitle = title ? `${title} | ${siteConfig.brandSignature}` : t('seo.defaultTitle');
    const pageDescription = description || t('seo.defaultDescription');
    const canonicalUrl = `${siteConfig.baseUrl}${location.pathname}`;
    const absoluteImage = image.startsWith('http') ? image : `${siteConfig.baseUrl}${image}`;

    document.documentElement.lang = language;
    document.title = pageTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: pageDescription });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' });
    if (keywords.length) upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') });

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: pageDescription });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: absoluteImage });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteConfig.brandSignature });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: localeMap[language] || siteConfig.locale });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: pageDescription });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: absoluteImage });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    document.head.querySelectorAll('link[data-baklavateur-hreflang]').forEach((node) => node.remove());
    supportedLanguages.forEach((lang) => {
      const href = `${siteConfig.baseUrl}${getLocalizedPath(resolved.key, lang, resolved.slug)}`;
      const alternate = document.createElement('link');
      alternate.rel = 'alternate';
      alternate.hreflang = lang;
      alternate.href = href;
      alternate.dataset.baklavateurHreflang = 'true';
      document.head.appendChild(alternate);
    });
    const defaultAlternate = document.createElement('link');
    defaultAlternate.rel = 'alternate';
    defaultAlternate.hreflang = 'x-default';
    defaultAlternate.href = `${siteConfig.baseUrl}${getLocalizedPath(resolved.key, siteConfig.defaultLanguage, resolved.slug)}`;
    defaultAlternate.dataset.baklavateurHreflang = 'true';
    document.head.appendChild(defaultAlternate);

    document.head.querySelectorAll('script[data-baklavateur-schema]').forEach((node) => node.remove());
    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.filter(Boolean).forEach((item) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.baklavateurSchema = 'true';
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [description, image, keywords, language, location.pathname, noindex, schema, t, title, type]);

  return null;
}
