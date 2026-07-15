import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import Seo from '../components/Seo';
import { breadcrumbSchema } from '../config/seoSchemas';
import useLocalizedPath from '../hooks/useLocalizedPath';

const copy = {
  tr:{kicker:'Cenevre gurme koleksiyonu',title:'Seçkin Lezzetler',lead:'Baklava, lokum, kuruyemiş ve hediye kutularından oluşan koleksiyonumuzu keşfedin. Her ürün Cenevre’de zarif sunum ve kolay WhatsApp siparişi için seçildi.',note:'Siparişinizi WhatsApp üzerinden kişiselleştirin.'},
  fr:{kicker:'Collection gourmande genevoise',title:'Saveurs d’Exception',lead:'Découvrez notre sélection de baklavas, loukoums, fruits secs et coffrets cadeaux, pensée pour une présentation élégante à Genève.',note:'Personnalisez votre commande directement sur WhatsApp.'},
  de:{kicker:'Genfer Gourmet-Kollektion',title:'Erlesene Spezialitäten',lead:'Entdecken Sie Baklava, Lokum, Nüsse und Geschenkboxen, ausgewählt für stilvollen Genuss und persönliche Bestellung in Genf.',note:'Personalisieren Sie Ihre Bestellung direkt über WhatsApp.'},
  en:{kicker:'Geneva gourmet collection',title:'Exceptional Selections',lead:'Discover our curated baklava, Turkish delight, premium nuts and gift boxes, selected for elegant presentation and easy ordering in Geneva.',note:'Personalise your order directly through WhatsApp.'}
};

export default function ProductsPage() {
  const { i18n, t } = useTranslation();
  const language = i18n.language.slice(0, 2);
  const c = copy[language] || copy.tr;
  const path = useLocalizedPath();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'all';
    setCategory(nextCategory);
  }, [searchParams]);

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const text = `${product.name[language] || product.name.fr} ${product.description[language] || product.description.fr}`.toLocaleLowerCase(language);
      return matchesCategory && (!normalizedQuery || text.includes(normalizedQuery));
    });
    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name') return (a.name[language] || a.name.fr).localeCompare(b.name[language] || b.name.fr, language);
      const order = { baklava: 0, lokum: 1, nuts: 2, gift: 3 };
      const categoryDifference = (order[a.category] ?? 99) - (order[b.category] ?? 99);
      if (categoryDifference !== 0) return categoryDifference;
      return Number(b.featured) - Number(a.featured);
    });
  }, [category, language, query, sort]);

  const changeCategory = (event) => {
    const nextCategory = event.target.value;
    setCategory(nextCategory);
    const nextParams = new URLSearchParams(searchParams);
    if (nextCategory === 'all') nextParams.delete('category'); else nextParams.set('category', nextCategory);
    setSearchParams(nextParams, { replace: true });
  };

  return <main className="luxury-page products-luxury-page">
    <Seo title={t('seo.productsTitle')} description={t('seo.productsDescription')} keywords={['baklava Cenevre','lokum Cenevre','kuruyemiş Cenevre','baklava Genève livraison','coffret cadeau Genève']} schema={breadcrumbSchema([{ name:t('nav.home'),path:path('home')},{name:t('nav.products'),path:path('products')}])}/>
    <section className="luxury-page-hero products-page-hero">
      <div className="luxury-page-hero-overlay"/>
      <div className="luxury-page-hero-content"><span>{c.kicker}</span><h1>{c.title}</h1><p>{c.lead}</p><div className="hero-mini-proof"><Sparkles size={16}/>{c.note}</div></div>
    </section>

    <section className="luxury-catalog-shell">
      <div className="luxury-filter-panel">
        <label className="luxury-search"><Search size={18}/><input aria-label={t('search')} placeholder={t('search')} value={query} onChange={(e)=>setQuery(e.target.value)}/></label>
        <label className="luxury-select"><SlidersHorizontal size={17}/><select value={category} onChange={changeCategory} aria-label={t('allCategories')}>{categories.map((item)=><option value={item.id} key={item.id}>{item.label[language]||item.label.fr}</option>)}</select></label>
        <label className="luxury-select"><select value={sort} onChange={(e)=>setSort(e.target.value)} aria-label={t('sort')}><option value="featured">{t('sortOptions.featured')}</option><option value="price-asc">{t('sortOptions.priceAsc')}</option><option value="price-desc">{t('sortOptions.priceDesc')}</option><option value="name">{t('sortOptions.name')}</option></select></label>
        <span className="luxury-results-count">{t('productResults',{count:visibleProducts.length})}</span>
      </div>
      {visibleProducts.length ? <div className="product-grid luxury-product-grid">{visibleProducts.map((product)=><ProductCard key={product.id} product={product}/>)}</div> : <div className="empty-state"><h2>{t('noProducts.title')}</h2><p>{t('noProducts.text')}</p></div>}
    </section>
  </main>;
}
