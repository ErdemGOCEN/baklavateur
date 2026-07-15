import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath, resolveRouteKey, supportedLanguages } from '../routes/localizedRoutes';

export default function LanguageRouteSync() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const firstSegment = location.pathname.split('/').filter(Boolean)[0];
    if (!supportedLanguages.includes(firstSegment)) {
      const stored = localStorage.getItem('baklavateur-language');
      const language = supportedLanguages.includes(stored) ? stored : 'tr';
      const { key, slug } = resolveRouteKey(location.pathname);
      navigate(getLocalizedPath(key, language, slug), { replace: true });
      return;
    }
    if (i18n.language.slice(0, 2) !== firstSegment) i18n.changeLanguage(firstSegment);
  }, [i18n, location.pathname, navigate]);

  return null;
}
