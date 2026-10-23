import { pricesPerKg, productPricesPerKg, giftBoxPrices } from '../config/pricing.js';
export const roundPrice = value => Math.round((value + Number.EPSILON) * 100) / 100;
export function weightInGrams(weight) {
 const match = String(weight || '').trim().replace(',', '.').match(/^(\d+(?:\.\d+)?)\s*(kg|g)$/i);
 return match ? Number(match[1]) * (match[2].toLowerCase() === 'kg' ? 1000 : 1) : null;
}
export function unitPrice(product, weight = product.weights?.[0] || product.weight) {
 if (product.pricingMode === 'box') return product.price;
 if (Number.isFinite(product.pricePerKg)) {
  const grams = weightInGrams(weight);
  return grams === null ? null : roundPrice(product.pricePerKg * grams / 1000);
 }
 return Number.isFinite(product.price) ? product.price : null;
}
export function totalPrice(product, weight, quantity = 1) {
 const unit = unitPrice(product, weight);
 return unit === null ? null : roundPrice(unit * Math.max(1, Math.floor(quantity)));
}
export function withTemporaryPricing(product) {
 if (!product.weights?.length && product.category !== 'gift') return {...product, pricingMode:'box', price:39};
 if (product.category === 'gift') return {...product, pricingMode:'box', price:giftBoxPrices[product.id] ?? 59};
 const priced = {...product, pricingMode:'weight', pricePerKg: productPricesPerKg[product.id] ?? pricesPerKg[product.category]};
 return {...priced, price:unitPrice(priced)};
}
