import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import WhatsAppButton from './WhatsAppButton';
import useLocalizedPath from '../hooks/useLocalizedPath';

export default function ProductCard({ product }) {
  const { i18n, t } = useTranslation();
  const path = useLocalizedPath();
  const language = i18n.language.slice(0, 2);
  const name = product.name[language] || product.name.fr;
  const description = product.description[language] || product.description.fr;
  const defaultWeight = product.weights?.[0] || '';
  const detailPath = path('product', product.slug);

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <Link to={detailPath} className="product-image-link" aria-label={name}>
        <img src={product.image} alt={`${name} — Baklavateur Genève`} loading="lazy" decoding="async" width="600" height="600" itemProp="image" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.src = '/images/baklava-placeholder.jpg'; }} />
      </Link>
      <div className="product-body">
        <span className="product-weight">{defaultWeight}</span>
        <h3 itemProp="name"><Link to={detailPath}>{name}</Link></h3>
        <p itemProp="description">{description}</p>
        <div className="product-commerce-row"><div className="price" itemProp="offers" itemScope itemType="https://schema.org/Offer"><meta itemProp="priceCurrency" content="CHF"/><meta itemProp="price" content={product.price.toFixed(2)}/><meta itemProp="availability" content="https://schema.org/InStock"/>CHF {product.price.toFixed(2)}</div><div className="product-rating" aria-label={`${product.rating} / 5`}><Star size={15} fill="currentColor"/><strong>{product.rating.toFixed(2)}</strong><span>({product.reviewCount})</span></div></div>
        <div className="card-actions">
          <Link className="btn btn-outline" to={detailPath}>{t('buttons.details')}</Link>
          <WhatsAppButton productName={name} weight={defaultWeight} label={t('buttons.order')} />
        </div>
      </div>
    </article>
  );
}
