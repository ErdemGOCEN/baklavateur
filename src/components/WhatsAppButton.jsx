import { useTranslation } from 'react-i18next';
import { createWhatsAppUrl } from '../config/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton({ productName, weight, quantity = 1, label, className = '', iconOnly = false }) {
  const { i18n, t } = useTranslation();
  const url = createWhatsAppUrl({
    language: i18n.language.slice(0, 2),
    productName,
    weight,
    quantity,
  });
  const buttonLabel = label || t('hero.order');

  return (
    <a
      className={`btn btn-gold whatsapp-button ${iconOnly ? 'whatsapp-icon-only' : ''} ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <WhatsAppIcon size={iconOnly ? 28 : 20} />
      {!iconOnly && <span>{buttonLabel}</span>}
    </a>
  );
}
