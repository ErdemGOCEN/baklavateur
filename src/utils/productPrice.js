export default function productPrice(product, language = 'fr') {
 if (Number.isFinite(product.price)) return `CHF ${product.price.toFixed(2)}`;
 return {fr:'Prix sur demande',de:'Preis auf Anfrage',en:'Price on request',tr:'Fiyat için iletişime geçin'}[language] || 'Prix sur demande';
}
