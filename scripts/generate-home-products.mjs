import {writeFile} from 'node:fs/promises';
import {products} from '../src/data/products.js';
const cards=[1,4,2,6,23,35].map(id=>{
 const product=products.find(p=>p.id===id);
 if(!product)throw new Error(`Missing homepage product ${id}`);
 const {slug,image,name,price,rating,reviewCount}=product;
 return {id,slug,image,name,price,rating,reviewCount,weight:product.weights[0]||''};
});
await writeFile(new URL('../src/data/homeProducts.js',import.meta.url),'// Generated from the catalogue by generate-home-products.mjs.\nexport default '+JSON.stringify(cards)+';\n');
