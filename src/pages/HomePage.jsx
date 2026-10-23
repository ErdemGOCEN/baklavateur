import { ArrowRight, ChefHat, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import useHomeParallax from '../hooks/useHomeParallax';
import { products } from '../data/products';
import ProductSlider from '../components/ProductSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';
import WhatsAppButton from '../components/WhatsAppButton';
import Botanical from '../components/Botanical';
import WaveDivider from '../components/WaveDivider';
import useLocalizedPath from '../hooks/useLocalizedPath';
import { organizationSchema, websiteSchema } from '../config/seoSchemas';
const categoryMeta = {
  baklava: { image: '/images/products/imam-baklava-1.jpg', slug: 'baklava' },
  lokum: { image: '/images/products/turkish-delight-mix.avif', slug: 'lokum' },
  nuts: { image: '/images/products/haluk-nuts-35.jpg', slug: 'nuts' },
  gift: { image: '/images/products/luxury-gift-box.png', slug: 'gift' },
};

const sliderProducts = [1, 4, 2, 6, 23, 35].map(id => {const p = products.find(item => item.id === id); return {...p, weight:p.weights[0] || ''};});
const copy={
 tr:{script:'Paylaşmanın en tatlı hâli.',note:'Anadolu’dan Cenevre’ye',selection:'Biraz çıtır. Biraz mutluluk.',universe:'Her zevke bir tat',story:'Her katında bir hikâye.',gift:'Küçük bir jest, büyük bir mutluluk.',contact:'Tatlı bir şeyler konuşalım.'},
 fr:{script:'Le bonheur se partage.',note:'De l’Anatolie à Genève',selection:'Du croquant. Du bonheur.',universe:'À chacun sa gourmandise',story:'Une histoire dans chaque feuille.',gift:'Petites attentions, grands bonheurs.',contact:'Parlons de vos envies gourmandes.'},
 en:{script:'Happiness is made to share.',note:'From Anatolia to Geneva',selection:'A little crunch. A lot of joy.',universe:'Something sweet for everyone',story:'A story in every layer.',gift:'Little gestures, lovely moments.',contact:'Let’s talk about something sweet.'},
 de:{script:'Glück ist zum Teilen da.',note:'Von Anatolien nach Genf',selection:'Knusprig. Köstlich. Glücklich.',universe:'Für jeden eine Köstlichkeit',story:'Eine Geschichte in jeder Schicht.',gift:'Kleine Gesten, große Freude.',contact:'Sprechen wir über süße Wünsche.'}
};
export default function HomePage(){
 useHomeParallax();
 const {t,i18n}=useTranslation(); const path=useLocalizedPath();const c=copy[i18n.language.slice(0,2)]||copy.fr;const names=t('cats',{returnObjects:true});const desc=t('categoryDescriptions',{returnObjects:true});const trust=t('trustBadges',{returnObjects:true});const icons=[Truck,ChefHat,ShieldCheck,Leaf];
 return <main className="botanical-home">
 <Seo title={t('seo.homeTitle')} description={t('seo.homeDescription')} schema={[organizationSchema,websiteSchema]}/>
 <section className="garden-hero">
  <Botanical className="hero-sprig" count={1}/><Botanical className="extra-hero-sprig" count={2}/>
  <div className="garden-hero-copy"><span className="eyebrow">{c.note}</span><h1>{t('hero.title')}</h1><p className="script">{c.script}</p><p className="hero-description">{t('hero.text')}</p><Link className="btn" to={path('products')}>{t('hero.discover')}<ArrowRight size={17}/></Link></div>
  <div className="garden-hero-art"><svg className="hero-blob" viewBox="0 0 600 650" preserveAspectRatio="none" aria-hidden="true"><path fill="#ffc400" d="M185 0H600V650H162C30 551 77 475 48 360C-10 150 179 182 185 0Z"><animate attributeName="d" values="M185 0H600V650H162C30 551 77 475 48 360C-10 150 179 182 185 0Z;M155 0H600V650H185C75 551 20 475 70 360C125 150 125 182 155 0Z;M185 0H600V650H162C30 551 77 475 48 360C-10 150 179 182 185 0Z" dur="12s" repeatCount="indefinite"/></path></svg><video className="hero-baklava-video" onLoadedMetadata={event => { event.currentTarget.defaultPlaybackRate = 0.75; event.currentTarget.playbackRate = 0.75; }} autoPlay muted loop playsInline preload="auto" poster="/videos/baklava-hero-poster.jpg" aria-label="Baklava — Baklavateur Genève"><source src="/videos/baklava-hero.mp4" type="video/mp4"/></video><span className="hero-seal">BAKLAVATEUR<span>Genève</span><small>L’ART DU BAKLAVA</small></span></div>
  <Botanical className="hero-bottom-sprig" count={2}/>
 </section>
 <section className="garden-intro" id="univers"><WaveDivider phase={1}/><Botanical className="intro-sprig" count={3}/><Botanical className="extra-intro-sprig" count={1}/><span className="eyebrow">BAKLAVATEUR · GENÈVE</span><h2>{c.story}</h2><p>{t('introText')}</p><Link className="btn btn-outline" to={path('about')}>{t('story.link')}<ArrowRight size={17}/></Link><WaveDivider className="end-wave" phase={3}/></section>
 <section className="garden-categories"><WaveDivider phase={2}/><Botanical className="category-sprig" count={1}/><Botanical className="category-tail-sprig" count={2}/><Botanical className="extra-category-sprig" count={3}/><div className="garden-heading"><span className="eyebrow">{t('sections.categories')}</span><h2>{c.universe}</h2></div><div className="garden-category-grid">{['baklava','lokum','nuts','gift'].map((key,i)=><Link key={key} to={`${path('products')}?category=${key}`} className={`garden-category category-${i}`}><div className="category-photo"><img src={categoryMeta[key].image} alt={names[i]} loading="lazy"/></div><div className="category-copy"><span className="eyebrow">BAKLAVATEUR</span><h3>{names[i]}</h3><p>{desc[key]}</p><span className="round-arrow"><ArrowRight size={20}/></span></div></Link>)}</div></section>
 <section className="garden-featured"><WaveDivider className="feature-wave-top" phase={2}/><WaveDivider className="feature-wave-bottom" phase={4}/><Botanical className="featured-sprig" count={2}/><Botanical className="featured-left-sprig" count={1}/><Botanical className="extra-featured-sprig" count={2}/><div className="garden-heading"><span className="eyebrow">{t('sections.featured')}</span><h2>{c.selection}</h2></div><ProductSlider products={sliderProducts}/><Link className="btn" to={path('products')}>{t('sections.allProducts')}<ArrowRight size={17}/></Link></section>
 <section className="garden-gift"><WaveDivider phase={3}/><div className="gift-art"><div className="gift-blob"/><img src="/images/products/luxury-gift-box.png" alt={t('gift.title')} loading="lazy"/></div><div className="gift-copy"><span className="eyebrow">{t('gift.eyebrow')}</span><h2>{t('gift.title')}</h2><p className="script">{c.gift}</p><p>{t('gift.text')}</p><WhatsAppButton label={t('gift.button')}/></div><Botanical className="gift-sprig" count={1}/><Botanical className="gift-tail-sprig" count={2}/><Botanical className="extra-gift-sprig" count={1}/></section>
 <section className="garden-trust"><WaveDivider phase={4}/><Botanical className="trust-sprig" count={1}/>{trust.map((b,i)=>{const Icon=icons[i];return <article key={b.title}><Icon size={30} strokeWidth={1.2}/><h3>{b.title}</h3><p>{b.desc}</p></article>})}<WaveDivider className="end-wave" phase={3}/></section>
 <section className="garden-reviews"><WaveDivider phase={5}/><Botanical className="reviews-sprig" count={3}/><Botanical className="reviews-left-sprig" count={2}/><Botanical className="extra-review-sprig" count={1}/><div className="garden-heading"><span className="eyebrow">GENÈVE & SUISSE</span><h2>{t('sections.testimonials')}</h2><p>{t('sections.testimonialsSub')}</p></div><TestimonialCarousel/></section>
 <section className="garden-contact"><WaveDivider phase={6}/><Botanical count={3}/><Botanical className="extra-contact-sprig" count={3}/><div><span className="eyebrow">BAKLAVATEUR — GENÈVE</span><h2>{c.contact}</h2><p>{t('contactText')}</p><WhatsAppButton/></div></section>
 </main>
}
