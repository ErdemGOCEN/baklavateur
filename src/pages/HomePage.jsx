import { ArrowRight, ChefHat, Wheat, Sparkles, MapPin, Truck, ShieldCheck, CreditCard, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { Link } from 'react-router-dom';
import useLocalizedPath from '../hooks/useLocalizedPath';
import ProductSlider from '../components/ProductSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { organizationSchema, websiteSchema } from '../config/seoSchemas';

const categoryMeta = {
  baklava: { 
    image: '/images/products/1-7-600x600.avif', 
    slug: 'baklava',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  lokum: { 
    image: '/images/products/turkish-delight-mix.avif', 
    slug: 'lokum',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
    )
  },
  nuts: { 
    image: '/images/products/IMG_5117-600x600.avif', 
    slug: 'nuts',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3a9 9 0 0 0-9 9c0 1.5.5 3 1.5 4.2L3 21l4.8-1.5c1.2 1 2.7 1.5 4.2 1.5a9 9 0 0 0 9-9 9 9 0 0 0-9-9z"/>
      </svg>
    )
  },
  gift: { 
    image: '/images/products/luxury-gift-box.png', 
    slug: 'gift',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 12V22H4V12M22 7H2V12H22V7Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V7M12 7H17M12 7H7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
};

const sliderProducts = [
  {
    id: 1,
    slug: 'fistikli-baklava',
    name: {
      tr: 'Antep Fıstıklı Baklava',
      fr: 'Baklava aux Pistaches d’Antep',
      en: 'Antep Pistachio Baklava',
      de: 'Antep Pistazien-Baklava'
    },
    rating: 4.9,
    reviewCount: 128,
    price: 35,
    weight: '250g',
    image: '/images/products/1-7-600x600.avif'
  },
  {
    id: 2,
    slug: 'cevizli-baklava',
    name: {
      tr: 'Cevizli Baklava',
      fr: 'Baklava aux Noix',
      en: 'Walnut Baklava',
      de: 'Walnuss-Baklava'
    },
    rating: 4.8,
    reviewCount: 96,
    price: 30,
    weight: '250g',
    image: '/images/products/2067-Antep-fistikli-Duble-600x600.avif'
  },
  {
    id: 4,
    slug: 'midye-baklava',
    name: {
      tr: 'Fıstıklı Midye Baklava',
      fr: 'Baklava Coquillage aux Pistaches',
      en: 'Pistachio Mussel Baklava',
      de: 'Pistazien-Muschel-Baklava'
    },
    rating: 4.9,
    reviewCount: 76,
    price: 36,
    weight: '250g',
    image: '/images/products/Capture-decran-2026-01-27-a-08.39.46-Photoroom-600x600.avif'
  },
  {
    id: 23,
    slug: 'istanbul-karisik',
    name: {
      tr: 'Karışık Lokum',
      fr: 'Loukoum Mixte',
      en: 'Mixed Turkish Delight',
      de: 'Gemischtes Lokum'
    },
    rating: 4.8,
    reviewCount: 112,
    price: 28,
    weight: '250g',
    image: '/images/products/Loukomum-Mixte-Malaga1-1-600x600.avif'
  },
  {
    id: 13,
    slug: 'fistikli-lokum',
    name: {
      tr: 'Fıstıklı Lokum',
      fr: 'Loukoum aux Pistaches',
      en: 'Pistachio Turkish Delight',
      de: 'Pistazien-Lokum'
    },
    rating: 4.9,
    reviewCount: 88,
    price: 30,
    weight: '250g',
    image: '/images/products/Loukomum-Mixte-Istanbul3-600x600.avif'
  },
  {
    id: 35,
    slug: 'karisik-premium',
    name: {
      tr: 'Lüks Karışık Kuruyemiş',
      fr: 'Mélange de Fruits Secs de Luxe',
      en: 'Luxury Mixed Nuts',
      de: 'Luxus Nussmischung'
    },
    rating: 4.8,
    reviewCount: 64,
    price: 32,
    weight: '250g',
    image: '/images/products/IMG_5148-600x600.avif'
  }
];

const introIcons = [ChefHat, Wheat, Sparkles, MapPin];
const trustIcons = [Truck, ShieldCheck, CreditCard, MessageCircle];

export default function HomePage(){
  const { t } = useTranslation();
  const path = useLocalizedPath();
  const categoryNames = t('cats', { returnObjects: true });
  const categoryDescriptions = t('categoryDescriptions', { returnObjects: true }) || {};

  return (
    <main className="home-rebuild premium-dark-theme">
      <Seo title={t('seo.homeTitle')} description={t('seo.homeDescription')} keywords={['Cenevre baklava','baklava Genève','baklava teslimatı Cenevre','lokum Genève','kuruyemiş Genève','hediye kutusu Genève']} schema={[organizationSchema, websiteSchema]} />

      {/* 1. Hero Section */}
      <section className="premium-hero-shell">
        <div className="premium-hero-card-layout">
          <div className="premium-hero-copy">
            <span className="eyebrow">{t('hero.eyebrow')}</span>
            <h1 className="hero-title-main">{t('hero.title')}</h1>
            <div className="hero-divider"></div>
            <p>{t('hero.text')}</p>
            <div className="hero-actions">
              <Link to={path('products')} className="btn btn-gold-hero">
                {t('hero.discover')} <span className="btn-arrow">&gt;</span>
              </Link>
              <Link to={path('about')} className="btn btn-outline-hero">
                {t('nav.about')}
              </Link>
            </div>
          </div>
          <div className="premium-hero-visual" style={{ backgroundImage: `url('/images/hero-premium.png')` }}></div>
        </div>
      </section>

      {/* 2. Geneva Showcase Section ("Cenevre'ye Özel") */}
      <section className="geneva-showcase-section">
        <div className="geneva-showcase-inner">
          <div className="geneva-showcase-visual" style={{ backgroundImage: `url('/images/geneva-night.png')` }}>
            <span className="geneva-cursive-text">Genève</span>
          </div>
          <div className="geneva-showcase-content">
            <span className="eyebrow-accent">{t('introSubtitle')}</span>
            <h2>{t('introTitle')}</h2>
            <p className="intro-main-text">{t('introText')}</p>
            <div className="geneva-benefits-grid">
              {t('introBenefits', { returnObjects: true }).map((b, i) => {
                const Icon = introIcons[i];
                return (
                  <div key={i} className="geneva-benefit-card">
                    <div className="geneva-benefit-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories Section */}
      <section className="section premium-categories-section" id="collections">
        <div className="premium-category-grid">
          {['baklava', 'lokum', 'nuts', 'gift'].map((category, index) => {
            const categoryName = categoryNames[index];
            const desc = categoryDescriptions[category] || '';
            const meta = categoryMeta[category];
            return (
              <Link
                className="premium-category-card-rebuilt"
                key={category}
                to={`${path('products')}?category=${category}`}
              >
                <div className="premium-category-image-rebuilt">
                  <img src={meta.image} alt={`${categoryName} Baklavateur Genève`} width="640" height="480" loading="lazy" decoding="async" />
                  <span className="category-corner-icon">{meta.icon}</span>
                </div>
                <div className="premium-category-copy-rebuilt">
                  <h3>{categoryName}</h3>
                  <p>{desc}</p>
                  <div className="category-explore-link">
                    <span>{t('buttons.explore').toUpperCase()}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4. Product Showcase Section ("BAKLAVATEUR SEÇKİSİ") */}
      <section className="premium-featured-products-section">
        <div className="featured-products-header">
          <div className="featured-products-heading">
            <h2>{t('sections.featured')}</h2>
            <p>{t('sections.featuredSub')}</p>
          </div>
          <Link className="all-products-link" to={path('products')}>
            {t('sections.allProducts')} <ArrowRight size={16} />
          </Link>
        </div>
        <ProductSlider products={sliderProducts} />
      </section>

      {/* 5. Continuous multilingual customer reviews */}
      <section className="premium-reviews-section" aria-labelledby="reviews-title">
        <div className="premium-reviews-heading">
          <span className="eyebrow">Baklavateur — Genève</span>
          <h2 id="reviews-title">{t('sections.testimonials')}</h2>
          <p>{t('sections.testimonialsSub')}</p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* 6. Bottom Features / Trust Badges */}
      <section className="premium-trust-badges-section">
        <div className="trust-badges-grid">
          {t('trustBadges', { returnObjects: true }).map((badge, i) => {
            const Icon = trustIcons[i];
            return (
              <div key={i} className="trust-badge-item">
                <div className="trust-badge-icon">
                  <Icon size={28} />
                </div>
                <div className="trust-badge-info">
                  <h3>{badge.title}</h3>
                  <p>{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
