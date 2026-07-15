import { useTranslation } from 'react-i18next';
import { getLocalizedPath } from '../routes/localizedRoutes';

export default function useLocalizedPath() {
  const { i18n } = useTranslation();
  const language = i18n.language.slice(0, 2);
  return (key, slug = '') => getLocalizedPath(key, language, slug);
}
