import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, PackageCheck, ShieldCheck, Truck } from 'lucide-react';
import ProductGallery from '../components/ProductGallery';
import ProductCard from '../components/ProductCard';
import QuantitySelector from '../components/QuantitySelector';
import WhatsAppButton from '../components/WhatsAppButton';
import { getProductBySlug, products } from '../data/products';
import Seo from '../components/Seo';
import useLocalizedPath from '../hooks/useLocalizedPath';
import { breadcrumbSchema, productSchema } from '../config/seoSchemas';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { i18n, t } = useTranslation();
  const language = i18n.language.slice(0, 2);
  const path = useLocalizedPath();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product?.weights?.[0] || '');

  const relatedProducts = useMemo(
    () => product ? products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3) : [],
    [product]
  );

  if (!product) {
    return <main className="placeholder-page"><span className="eyebrow">404</span><h1>{t('productDetail.notFound')}</h1><Link className="btn btn-gold" to={path('products')}>{t('nav.products')}</Link></main>;
  }

  const name = product.name[language] || product.name.fr;
  const description = product.description[language] || product.description.fr;
  const longDescription = product.longDescription[language] || product.longDescription.fr;

  return (
    <main className="product-detail-page">
      <Seo title={name} description={description} image={product.image} type="product" keywords={[`${name} Cenevre`, `${name} Genève`, 'baklava siparişi İsviçre']} schema={[productSchema(product, language, path('product', product.slug)), breadcrumbSchema([{ name: t('nav.home'), path: path('home') }, { name: t('nav.products'), path: path('products') }, { name, path: path('product', product.slug) }])]} />
      <div className="breadcrumbs">
        <Link to={path('home')}>{t('nav.home')}</Link><ChevronRight size={14} />
        <Link to={path('products')}>{t('nav.products')}</Link><ChevronRight size={14} />
        <span>{name}</span>
      </div>

      <section className="product-detail-grid">
        <ProductGallery image={product.image} name={name} />
        <div className="product-detail-info">
          <span className="eyebrow">Baklavateur — Genève</span>
          <h1>{name}</h1>
          <p className="product-lead">{description}</p>
          <div className="detail-price">CHF {product.price.toFixed(2)}</div>
          <p className="price-note">{t('productDetail.priceNote')}</p>

          <div className="selector-group">
            <span className="selector-label">{t('productDetail.weight')}</span>
            <div className="weight-options">
              {product.weights.map((weight) => (
                <button
                  type="button"
                  className={selectedWeight === weight ? 'active' : ''}
                  onClick={() => setSelectedWeight(weight)}
                  key={weight}
                >{weight}</button>
              ))}
            </div>
          </div>

          <QuantitySelector value={quantity} onChange={setQuantity} label={t('productDetail.quantity')} />
          <WhatsAppButton
            className="detail-order-button"
            productName={name}
            weight={selectedWeight}
            quantity={quantity}
            label={t('productDetail.order')}
          />

          <div className="product-assurances">
            <div><Truck size={20} /><span>{t('productDetail.delivery')}</span></div>
            <div><PackageCheck size={20} /><span>{t('productDetail.packaging')}</span></div>
            <div><ShieldCheck size={20} /><span>{t('productDetail.secure')}</span></div>
          </div>
        </div>
      </section>

      <section className="section product-content-section">
        <div className="product-description-block">
          <span className="eyebrow">Baklavateur</span>
          <h2>{t('productDetail.description')}</h2>
          <p>{longDescription}</p>
        </div>
        <div className="product-accordion">
          <details open><summary>{t('productDetail.ingredients')}<span>+</span></summary><p>{product.ingredients[language] || product.ingredients.fr}</p></details>
          <details><summary>{t('productDetail.allergens')}<span>+</span></summary><p>{product.allergens[language] || product.allergens.fr}</p></details>
          <details><summary>{t('productDetail.storage')}<span>+</span></summary><p>{product.storage[language] || product.storage.fr}</p></details>
          <details><summary>{t('productDetail.deliveryInfo')}<span>+</span></summary><p>{t('productDetail.deliveryText')}</p></details>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section section-dark">
          <div className="section-heading"><span>03</span><h2>{t('productDetail.related')}</h2></div>
          <div className="product-grid related-grid">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}</div>
        </section>
      )}
    </main>
  );
}
