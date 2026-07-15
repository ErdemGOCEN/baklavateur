import { Link } from 'react-router-dom';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import WhatsAppButton from './WhatsAppButton';
import useLocalizedPath from '../hooks/useLocalizedPath';

export default function Footer(){
  const {t}=useTranslation();
  const path = useLocalizedPath();
  return <footer className="footer premium-metal-footer footer-compact-premium">
    <div className="footer-metal-sheen" aria-hidden="true" />
    <div className="footer-main premium-footer-grid footer-clean-grid">
      <div className="footer-brand-column premium-footer-brand">
        <div className="brand brand-footer">
          <svg className="brand-logo" width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.4" />
            <path d="M20 8V32M20 8C23 8 25.5 10 25.5 13.5C25.5 17 23 19 20 19M20 8C17 8 14.5 10 14.5 13.5C14.5 17 17 19 20 19M20 19C23.5 19 26 21 26 25.5C26 30 23.5 32 20 32M20 19C16.5 19 14 21 14 25.5C14 30 16.5 32 20 32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="brand-text"><strong>BAKLAVATEUR</strong><span>GENÈVE</span></div>
        </div>
        <p className="footer-brand-description">{t('footerPremium.brandDescription')}</p>
      </div>

      <nav className="footer-clean-links" aria-label={t('footerNavigation')}>
        <Link to={path('home')}>{t('nav.home')}</Link>
        <Link to={path('products')}>{t('nav.products')}</Link>
        <Link to={path('about')}>{t('nav.about')}</Link>
        <Link to={path('contact')}>{t('nav.contact')}</Link>
      </nav>

      <div className="footer-clean-contact">
        <div><MapPin size={16}/><span>Genève, Suisse</span></div>
        <a href="tel:+41779977042"><Phone size={16}/><span>+41 77 997 70 42</span></a>
        <a href="mailto:contact@baklavateur.ch"><Mail size={16}/><span>contact@baklavateur.ch</span></a>
        <div><Clock3 size={16}/><span>{t('footerPremium.hours')}</span></div>
      </div>

      <div className="footer-clean-order">
        <p>{t('footerPremium.orderText')}</p>
        <WhatsAppButton className="footer-whatsapp-black-icon" />
        <div className="footer-socials" aria-label="Sosyal medya">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Baklavateur Instagram">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor"/></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Baklavateur Facebook">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.5 8H17V4.2c-.43-.06-1.9-.2-3.64-.2C9.74 4 7.25 6.2 7.25 10.25V13H4v4.25h3.25V24h4.25v-6.75h3.55L15.6 13h-4.1v-2.33C11.5 9.44 11.83 8 14.5 8Z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom premium-footer-bottom footer-clean-bottom">
      <span>© 2026 Baklavateur — Genève</span>
      <div>{t('footerPremium.deliveryLine')}</div>
      <LanguageSwitcher/>
    </div>
  </footer>;
}
