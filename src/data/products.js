import giftCollection from './giftCollection.js';
import nutsCollection from './nutsCollection.js';
import baklavaCollection from './baklavaCollection.js';
import lokumCollection from './lokumCollection.js';
const localized = (fr, de, en, tr) => ({ fr, de, en, tr });

export const categories = [
  { id: 'all', label: localized('Toutes les catégories','Alle Kategorien','All categories','Tüm kategoriler') },
  { id: 'baklava', label: localized('Baklava','Baklava','Baklava','Baklava') },
  { id: 'lokum', label: localized('Loukoum','Lokum','Turkish Delight','Lokum') },
  { id: 'nuts', label: localized('Fruits secs','Nüsse','Nuts','Kuruyemiş') },
  { id: 'gift', label: localized('Coffrets cadeaux','Geschenkboxen','Gift Boxes','Hediye Kutuları') },
];

const common = {
  ingredients: localized('Ingrédients sélectionnés selon la recette.','Ausgewählte Zutaten je nach Rezept.','Selected ingredients according to the recipe.','Tarife göre seçkin içerikler.'),
  allergens: localized('Peut contenir gluten, lait et fruits à coque.','Kann Gluten, Milch und Schalenfrüchte enthalten.','May contain gluten, milk and tree nuts.','Gluten, süt ve sert kabuklu yemiş içerebilir.'),
  storage: localized('Conserver au frais et au sec.','Kühl und trocken lagern.','Store in a cool, dry place.','Serin ve kuru yerde saklayınız.'),
};

const originalProducts = [










  {
    id:11, slug:'premium-lokum', category:'lokum', featured:true,
    rating:null, reviewCount:0, price:24.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Athenes6-600x600.webp',
    name:localized('Loukoum premium','Premium Lokum','Premium Turkish Delight','Premium Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:12, slug:'gullu-lokum', category:'lokum', featured:true,
    rating:null, reviewCount:0, price:19.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Berlin4-600x600.webp',
    name:localized('Loukoum à la rose','Rosen-Lokum','Rose Turkish Delight','Güllü Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:13, slug:'fistikli-lokum', category:'lokum', featured:true,
    rating:null, reviewCount:0, price:27.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Istanbul3-600x600.webp',
    name:localized('Loukoum à la pistache','Pistazien-Lokum','Pistachio Delight','Fıstıklı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:14, slug:'narli-lokum', category:'lokum', featured:true,
    rating:null, reviewCount:0, price:21.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Malaga1-1-600x600.webp',
    name:localized('Loukoum à la grenade','Granatapfel-Lokum','Pomegranate Delight','Narlı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:15, slug:'kadayifli-lokum', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:25.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Venise1-600x600.webp',
    name:localized('Loukoum au kadaif','Kadayif-Lokum','Kadayif Delight','Kadayıflı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:16, slug:'cifte-kavrulmus', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:28.9, weights:['350 g','700 g'],
    image:'/images/products/Loukum-Mixte-Amsterdam-1-600x600.webp',
    name:localized('Loukoum double torréfié','Doppelt geröstetes Lokum','Double Roasted Delight','Çifte Kavrulmuş Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:17, slug:'findik-kremali', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:26.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-baguette-petales-rose-grenade-pistache-dh2026k-001-001-600x600.webp',
    name:localized('Loukoum crème noisette','Haselnusscreme-Lokum','Hazelnut Cream Delight','Fındık Kremalı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:18, slug:'badem-kremali', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:26.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-royal-cube-berberis-mix-fruits-coque-dh3925k-001-001-600x600.webp',
    name:localized('Loukoum crème amande','Mandelcreme-Lokum','Almond Cream Delight','Badem Kremalı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:19, slug:'oreo-lokum', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:24.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-royal-roule-amande-creme-dh3714k-002-600x600.webp',
    name:localized('Loukoum crème Oreo','Oreo-Creme-Lokum','Oreo Cream Delight','Oreo Kremalı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:20, slug:'speculoos-lokum', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:23.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-royal-roule-kadaif-amande-dh3717k-001-600x600.webp',
    name:localized('Loukoum spéculoos','Spekulatius-Lokum','Speculoos Delight','Speculoos Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:21, slug:'gulkus-lokum', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:25.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-royal-roule-kadaif-creme-noisette-dh3719k-001-600x600.webp',
    name:localized('Loukoum aux pétales de rose','Lokum mit Rosenblättern','Rose Petal Delight','Gül Yapraklı Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:22, slug:'berberis-lokum', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:25.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-royal-roule-oreo-creme-dh3715k-001-002-600x600.webp',
    name:localized('Loukoum au berbéris','Berberitzen-Lokum','Berberis Delight','Berberisli Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:23, slug:'istanbul-karisik', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:29.9, weights:['350 g','700 g'],
    image:'/images/products/loukoum-speculos-copie-600x600.webp',
    name:localized('Assortiment Istanbul','Istanbul-Lokum-Mix','Istanbul Mixed Delight','İstanbul Karışık Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:24, slug:'venedik-karisik', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:29.9, weights:['350 g','700 g'],
    image:'/images/products/turkish-delight-mix.webp',
    name:localized('Assortiment Venise','Venedig-Lokum-Mix','Venice Mixed Delight','Venedik Karışık Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
  {
    id:25, slug:'atena-karisik', category:'lokum', featured:false,
    rating:null, reviewCount:0, price:29.9, weights:['350 g','700 g'],
    image:'/images/products/Loukomum-Mixte-Athenes6-600x600.webp',
    name:localized('Assortiment Athènes','Athen-Lokum-Mix','Athens Mixed Delight','Atina Karışık Lokum'),
    description:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    longDescription:localized('Loukoum fondant aux arômes délicats.','Zartes Lokum mit feinen Aromen.','Soft Turkish delight with delicate flavours.','Yumuşak dokulu, zarif aromalı özel lokum.'),
    ...common,
  },
];

// Refresh matching varieties while preserving their existing links and IDs.
const existingLokumIds = {"101": 21, "102": 22, "103": 18, "104": 13, "109": 25, "110": 24, "111": 12, "114": 14, "115": 17, "116": 19, "205": 23, "208": 15};
const refreshedLokum = lokumCollection.map(item => {
 const previous = originalProducts.find(p => p.id === existingLokumIds[item.id]);
 return previous ? {...item, id: previous.id, slug: previous.slug} : item;
});
export const products = [...originalProducts.filter(p => !Object.values(existingLokumIds).includes(p.id)), ...refreshedLokum, ...baklavaCollection, ...nutsCollection, ...giftCollection].map(product => ({...product, rating: null, reviewCount: 0}));

export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);
