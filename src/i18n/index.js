import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import de from './locales/de.json';
import en from './locales/en.json';
import tr from './locales/tr.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources:{tr:{translation:tr},fr:{translation:fr},de:{translation:de},en:{translation:en}},
  fallbackLng:'tr',
  supportedLngs:['tr','fr','de','en'],
  detection:{order:['localStorage'],caches:['localStorage'],lookupLocalStorage:'baklavateur-language'},
  interpolation:{escapeValue:false}
});
export default i18n;
