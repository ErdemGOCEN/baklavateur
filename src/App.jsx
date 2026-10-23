import {useTranslation} from 'react-i18next';
import {lazy, Suspense} from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageRouteSync from './components/LanguageRouteSync';
import HomePage from './pages/HomePage';
const ProductsPage=lazy(()=>import('./pages/ProductsPage'));
const ProductDetailPage=lazy(()=>import('./pages/ProductDetailPage'));
const AboutPage=lazy(()=>import('./pages/AboutPage'));
const ContactPage=lazy(()=>import('./pages/ContactPage'));
import NotFoundPage from './pages/NotFoundPage';
import ScrollManager from './components/ScrollManager';
import BackToTop from './components/BackToTop';

export function SiteContent() {
  return (
    <>
      <LanguageRouteSync />
      <ScrollManager />
      <Header />
      <Suspense fallback={<RouteLoading/>}><Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:lang" element={<HomePage />} />
        <Route path="/:lang/produits" element={<ProductsPage />} />
        <Route path="/:lang/produkte" element={<ProductsPage />} />
        <Route path="/:lang/products" element={<ProductsPage />} />
        <Route path="/:lang/urunler" element={<ProductsPage />} />
        <Route path="/:lang/produit/:slug" element={<ProductDetailPage />} />
        <Route path="/:lang/produkt/:slug" element={<ProductDetailPage />} />
        <Route path="/:lang/product/:slug" element={<ProductDetailPage />} />
        <Route path="/:lang/urun/:slug" element={<ProductDetailPage />} />
        <Route path="/:lang/a-propos" element={<AboutPage />} />
        <Route path="/:lang/ueber-uns" element={<AboutPage />} />
        <Route path="/:lang/about-us" element={<AboutPage />} />
        <Route path="/:lang/hakkimizda" element={<AboutPage />} />
        <Route path="/:lang/contact" element={<ContactPage />} />
        <Route path="/:lang/kontakt" element={<ContactPage />} />
        <Route path="/:lang/iletisim" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes></Suspense>
      <Footer />
      <BackToTop />
      <WhatsAppButton className="floating-whatsapp" iconOnly />
    </>
  );
}

function RouteLoading(){
 const {i18n}=useTranslation();
 const text={fr:'Chargement de la page…',tr:'Sayfa yükleniyor…',de:'Seite wird geladen…',en:'Loading the page…'}[i18n.language.slice(0,2)]||'Chargement…';
 return <main className="route-loading" aria-busy="true"><p role="status">{text}</p><div className="route-loading-placeholder" aria-hidden="true"/></main>;
}
export default function App(){return <BrowserRouter><SiteContent/></BrowserRouter>;}
