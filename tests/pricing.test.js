import test from 'node:test';
import assert from 'node:assert/strict';
import { products } from '../src/data/products.js';
import { weightInGrams, unitPrice, totalPrice } from '../src/utils/pricing.js';
import { createWhatsAppUrl } from '../src/config/whatsapp.js';
test('weight conversion and proportional prices', () => {
 assert.equal(weightInGrams('1,5 kg'),1500);
 const p={pricePerKg:72, weights:['500 g']};
 assert.equal(unitPrice(p,'250 g'),18);
 assert.equal(unitPrice(p,'500 g'),36);
 assert.equal(unitPrice(p,'1 kg'),72);
 assert.equal(totalPrice(p,'750 g',3),162);
 assert.equal(unitPrice({pricePerKg:33.33},'250 g'),8.33);
});
test('all catalogue formats have valid prices; boxes stay fixed',()=>{
 for(const p of products){
  assert.ok(p.price>0,p.slug);
  for(const weight of p.weights) assert.ok(unitPrice(p,weight)>0,`${p.slug} ${weight}`);
 }
 const box=products.find(p=>p.id===501);
 assert.equal(unitPrice(box,'700 g'),59);
 assert.equal(totalPrice(box,'700 g',2),118);
});
test('order link includes the selected weight, quantity and total',()=>{
 const text=new URL(createWhatsAppUrl({language:'fr',productName:'Baklava',weight:'500 g',quantity:2,totalPrice:72})).searchParams.get('text');
 assert.match(text,/500 g/);assert.match(text,/Quantité : 2/);assert.match(text,/CHF 72.00/);
});
