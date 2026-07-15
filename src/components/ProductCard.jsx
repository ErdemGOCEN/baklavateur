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
    <article className="product-card">
      <Link to={detailPath} className="product-image-link" aria-label={name}>
        <img src={product.image} alt={name} loading="lazy" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.src = '/images/baklava-placeholder.jpg'; }} />
      </Link>
      <div className="product-body">
        <span className="product-weight">{defaultWeight}</span>
        <h3><Link to={detailPath}>{name}</Link></h3>
        <p>{description}</p>
        <div className="product-commerce-row"><div className="price">CHF {product.price.toFixed(2)}</div><div className="product-rating" aria-label={`${product.rating} / 5`}><Star size={15} fill="currentColor"/><strong>{product.rating.toFixed(2)}</strong><span>({product.reviewCount})</span></div></div>
        <div className="card-actions">
          <Link className="btn btn-outline" to={detailPath}>{t('buttons.details')}</Link>
          <WhatsAppButton productName={name} weight={defaultWeight} label={t('buttons.order')} />
        </div>
      </div>
    </article>
  );
}
