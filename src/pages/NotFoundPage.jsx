import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import useLocalizedPath from '../hooks/useLocalizedPath';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const path = useLocalizedPath();
  return (
    <main className="placeholder-page not-found-page">
      <Seo title="404" description="Aradığınız sayfa bulunamadı." noindex />
      <span className="eyebrow">404</span>
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığınız bağlantı taşınmış veya artık mevcut olmayabilir.</p>
      <Link className="btn btn-gold" to={path('home')}>{t('nav.home')}</Link>
    </main>
  );
}
