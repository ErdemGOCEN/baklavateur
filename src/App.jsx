import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LanguageRouteSync from './components/LanguageRouteSync';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollManager from './components/ScrollManager';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageRouteSync />
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tr" replace />} />
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
      </Routes>
      <Footer />
      <BackToTop />
      <WhatsAppButton className="floating-whatsapp" iconOnly />
    </BrowserRouter>
  );
}
