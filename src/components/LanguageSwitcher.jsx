import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath, resolveRouteKey, supportedLanguages } from '../routes/localizedRoutes';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = i18n.language.slice(0, 2);

  const changeLanguage = async (language) => {
    const { key, slug } = resolveRouteKey(location.pathname);
    await i18n.changeLanguage(language);
    localStorage.setItem('baklavateur-language', language);
    navigate(getLocalizedPath(key, language, slug));
  };

  return (
    <div className="language-switcher" aria-label="Language selector">
      {supportedLanguages.map((language) => (
        <button
          type="button"
          key={language}
          className={currentLanguage === language ? 'active' : ''}
          onClick={() => changeLanguage(language)}
          aria-current={currentLanguage === language ? 'true' : undefined}
          aria-label={`Change language to ${language.toUpperCase()}`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
