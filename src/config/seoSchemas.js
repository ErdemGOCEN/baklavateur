import { siteConfig } from './siteConfig';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${siteConfig.baseUrl}/#organization`,
  name: siteConfig.brandName,
  alternateName: siteConfig.brandSignature,
  url: siteConfig.baseUrl,
  logo: `${siteConfig.baseUrl}/images/hero-premium.png`,
  image: `${siteConfig.baseUrl}${siteConfig.defaultOgImage}`,
  description: 'Baklavateur — Genève, Cenevre odaklı premium baklava, lokum, kuruyemiş ve hediye kutuları markasıdır.',
  telephone: siteConfig.whatsappDisplay,
  email: siteConfig.email,
  priceRange: 'CHF',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Genève',
    addressRegion: 'GE',
    addressCountry: 'CH',
  },
  areaServed: ['Genève', 'Suisse'],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.baseUrl}/#website`,
  url: siteConfig.baseUrl,
  name: siteConfig.brandSignature,
  inLanguage: ['tr', 'fr', 'de', 'en'],
  publisher: { '@id': `${siteConfig.baseUrl}/#organization` },
};

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.baseUrl}${item.path}`,
    })),
  };
}

export function productSchema(product, language, productPath) {
  const name = product.name[language] || product.name.fr;
  const description = product.description[language] || product.description.fr;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: [`${siteConfig.baseUrl}${product.image}`],
    sku: `BAK-${product.id}`,
    brand: { '@type': 'Brand', name: siteConfig.brandName },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.baseUrl}${productPath}`,
      priceCurrency: 'CHF',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };
}
