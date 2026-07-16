import { ArrowRight, ChefHat, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ProductSlider from '../components/ProductSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';
import WhatsAppButton from '../components/WhatsAppButton';
import useLocalizedPath from '../hooks/useLocalizedPath';
import { organizationSchema, websiteSchema } from '../config/seoSchemas';

const categoryMeta = {
  baklava: { image: '/images/products/1-7-600x600.avif', slug: 'baklava' },
  lokum: { image: '/images/products/turkish-delight-mix.avif', slug: 'lokum' },
  nuts: { image: '/images/products/IMG_5117-600x600.avif', slug: 'nuts' },
  gift: { image: '/images/products/luxury-gift-box.png', slug: 'gift' },
};

const sliderProducts = [
  { id: 1, slug: 'fistikli-baklava', name: { tr: 'Antep Fıstıklı Baklava', fr: 'Baklava aux Pistaches d’Antep', en: 'Antep Pistachio Baklava', de: 'Antep Pistazien-Baklava' }, rating: 4.96, reviewCount: 128, price: 35, weight: '250g', image: '/images/products/1-7-600x600.avif' },
  { id: 4, slug: 'midye-baklava', name: { tr: 'Fıstıklı Sarma', fr: 'Roulé aux Pistaches', en: 'Pistachio Roll', de: 'Pistazienrolle' }, rating: 4.95, reviewCount: 104, price: 34, weight: '250g', image: '/images/products/Capture-decran-2026-01-27-a-08.39.46-Photoroom-600x600.avif' },
  { id: 2, slug: 'cevizli-baklava', name: { tr: 'Cevizli Baklava', fr: 'Baklava aux Noix', en: 'Walnut Baklava', de: 'Walnuss-Baklava' }, rating: 4.92, reviewCount: 96, price: 30, weight: '250g', image: '/images/products/2067-Antep-fistikli-Duble-600x600.avif' },
  { id: 6, slug: 'havuc-dilimi', name: { tr: 'Havuç Dilimi', fr: 'Baklava Carotte', en: 'Carrot Slice Baklava', de: 'Karotten-Baklava' }, rating: 4.94, reviewCount: 89, price: 33, weight: '250g', image: '/images/products/IMG_1772-600x600.avif' },
  { id: 23, slug: 'istanbul-karisik', name: { tr: 'Karışık Lokum', fr: 'Loukoum Mixte', en: 'Mixed Turkish Delight', de: 'Gemischtes Lokum' }, rating: 4.88, reviewCount: 112, price: 28, weight: '250g', image: '/images/products/Loukomum-Mixte-Malaga1-1-600x600.avif' },
  { id: 35, slug: 'karisik-premium', name: { tr: 'Lüks Karışık Kuruyemiş', fr: 'Mélange de Fruits Secs de Luxe', en: 'Luxury Mixed Nuts', de: 'Luxus Nussmischung' }, rating: 4.87, reviewCount: 64, price: 32, weight: '250g', image: '/images/products/IMG_5148-600x600.avif' },
];

const trustIcons = [Leaf, ChefHat, ShieldCheck, Truck];

export default function HomePage() {
  const { t } = useTranslation();
  const path = useLocalizedPath();
  const categoryNames = t('cats', { returnObjects: true });
  const categoryDescriptions = t('categoryDescriptions', { returnObjects: true }) || {};
  const trustBadges = t('trustBadges', { returnObjects: true });

  return (
    <main className="home-v2 premium-dark-theme">
      <Seo
        title={t('seo.homeTitle')}
        description={t('seo.homeDescription')}
        keywords={['Cenevre baklava', 'baklava Genève', 'baklava teslimatı Cenevre', 'lokum Genève', 'kuruyemiş Genève', 'hediye kutusu Genève']}
        schema={[organizationSchema, websiteSchema]}
      />

      <section className="home-v2-hero" aria-labelledby="home-v2-title">
        <div className="home-v2-hero-copy">
          <span className="home-v2-kicker">BAKLAVATEUR GENÈVE</span>
          <h1 id="home-v2-title">{t('hero.title')}</h1>
          <div className="home-v2-ornament" aria-hidden="true"><span /></div>
          <p>{t('hero.text')}</p>
          <div className="home-v2-actions">
            <Link to={path('products')} className="btn btn-gold home-v2-primary">
              {t('hero.discover')} <ArrowRight size={18} />
            </Link>
            <WhatsAppButton className="home-v2-whatsapp" />
          </div>
          <div className="home-v2-delivery"><Truck size={19} /><span>50 CHF ve üzeri siparişlerinizde ücretsiz teslimat</span></div>
        </div>
        <div className="home-v2-hero-image golden-media-frame">
          <img src="/images/hero-premium.png" alt="Cenevre için hazırlanan premium Antep fıstıklı baklava" fetchPriority="high" />
        </div>
      </section>

      <section className="home-v2-trust" aria-label="Baklavateur kalite güvenceleri">
        {trustBadges.map((badge, index) => {
          const Icon = trustIcons[index];
          return (
            <article key={badge.title} className="home-v2-trust-item">
              <Icon size={34} />
              <div><h2>{badge.title}</h2><p>{badge.desc}</p></div>
            </article>
          );
        })}
      </section>

      <section className="home-v2-categories" aria-labelledby="home-v2-categories-title">
        <h2 id="home-v2-categories-title" className="sr-only">{t('sections.categories')}</h2>
        {['baklava', 'lokum', 'nuts', 'gift'].map((category, index) => (
          <Link key={category} className="home-v2-category-card" to={`${path('products')}?category=${category}`}>
            <img src={categoryMeta[category].image} alt={`${categoryNames[index]} Genève`} loading="lazy" />
            <div className="home-v2-category-overlay">
              <div><h3>{categoryNames[index]}</h3><p>{categoryDescriptions[category]}</p></div>
              <span className="home-v2-category-arrow"><ArrowRight size={18} /></span>
            </div>
          </Link>
        ))}
      </section>

      <section className="home-v2-featured" aria-labelledby="home-v2-featured-title">
        <div className="home-v2-section-title">
          <h2 id="home-v2-featured-title">{t('sections.featured')}</h2>
          <span aria-hidden="true" />
        </div>
        <ProductSlider products={sliderProducts} />
      </section>

      <section className="premium-reviews-section" aria-labelledby="reviews-title">
        <div className="premium-reviews-heading">
          <span className="eyebrow">Baklavateur — Genève</span>
          <h2 id="reviews-title">{t('sections.testimonials')}</h2>
          <p>{t('sections.testimonialsSub')}</p>
        </div>
        <TestimonialCarousel />
      </section>
    </main>
  );
}
