import { siteConfig } from './siteConfig.js';

const templates = {
  tr: ({ productName='ürünleriniz', weight='', quantity=1 }) => `Merhaba, size ${productName} ürünü için yazıyorum.${weight ? ` Gramaj: ${weight}.` : ''}${quantity ? ` Adet: ${quantity}.` : ''}`,
  fr: ({ productName='vos produits', weight='', quantity=1 }) => `Bonjour, je vous écris au sujet du produit ${productName}.${weight ? ` Format : ${weight}.` : ''}${quantity ? ` Quantité : ${quantity}.` : ''}`,
  de: ({ productName='Ihre Produkte', weight='', quantity=1 }) => `Guten Tag, ich schreibe Ihnen wegen des Produkts ${productName}.${weight ? ` Gewicht: ${weight}.` : ''}${quantity ? ` Menge: ${quantity}.` : ''}`,
  en: ({ productName='your products', weight='', quantity=1 }) => `Hello, I am writing to you about the product ${productName}.${weight ? ` Weight: ${weight}.` : ''}${quantity ? ` Quantity: ${quantity}.` : ''}`,
};

export function createWhatsAppUrl({ language='tr', productName, weight, totalPrice, quantity=1 }={}) {
  let message=(templates[language]||templates.tr)({productName,weight,quantity});
  if (Number.isFinite(totalPrice)) message += ` ${{fr:'Total',de:'Gesamt',en:'Total',tr:'Toplam'}[language] || 'Total'} : CHF ${totalPrice.toFixed(2)}.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
