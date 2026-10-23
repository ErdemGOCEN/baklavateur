import productPrice from '../utils/productPrice';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useLocalizedPath from '../hooks/useLocalizedPath';

function getVisibleCount(width) {
  if (width < 620) return 2;
  if (width < 900) return 2;
  if (width < 1180) return 3;
  return 4;
}

export default function ProductSlider({ products }) {
  const { i18n } = useTranslation();
  const path = useLocalizedPath();
  const language = i18n.language.slice(0, 2);
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const gap = 20;
  const moving = useRef(false);
  const releaseTimer = useRef(0);

  const move = useCallback((direction) => {
    if (moving.current || !products.length) return;
    moving.current = true;
    setAnimate(true);
    setIndex(current => direction < 0 && current === 0 ? -1 : Math.min(products.length, current + direction));
    window.clearTimeout(releaseTimer.current);
    releaseTimer.current = window.setTimeout(() => {
      setAnimate(false);
      setIndex(current => ((current % products.length) + products.length) % products.length);
      moving.current = false;
    }, 700);
  }, [products.length]);

  useEffect(() => () => window.clearTimeout(releaseTimer.current), []);

  const loopProducts = [...products, ...products, ...products];

  const measure = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const count = getVisibleCount(viewport.clientWidth);
    setVisibleCount(count);
    setStep((viewport.clientWidth + gap) / count);
  };

  useLayoutEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || products.length <= visibleCount) return undefined;
    const timer = window.setInterval(() => {
      move(1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [paused, products.length, visibleCount, move]);

  useEffect(() => {
    setAnimate(false);
    setIndex(0);
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [visibleCount, products.length]);

  if (!products?.length) return null;

  return (
    <div
      className="product-slider-container product-slider-live"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button type="button" className="slider-arrow slider-arrow-left" onClick={() => move(-1)} aria-label="Previous products">
        <ChevronLeft size={24} />
      </button>

      <div className="product-slider-viewport" ref={viewportRef}>
        <div
          className="product-slider-track-live"
          style={{
            gap: `${gap}px`,
            transform: `translate3d(-${(index + products.length) * step}px, 0, 0)`,
            transition: animate ? 'transform 650ms cubic-bezier(.22,.8,.24,1)' : 'none',
          }}
        >
          {loopProducts.map((product, itemIndex) => {
            const name = product.name[language] || product.name.tr;
            const detailPath = path('product', product.slug);
            return (
              <div
                key={`${product.id}-${itemIndex}`}
                className="slider-card-wrapper-live"
                style={{ flexBasis: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})` }}
                aria-hidden={itemIndex < products.length || itemIndex >= products.length * 2 ? true : undefined}
              >
                <Link to={detailPath} className="slider-product-card" tabIndex={itemIndex < products.length || itemIndex >= products.length * 2 ? -1 : undefined}>
                  <div className="slider-product-image">
                    <img src={product.image} alt={name} loading="lazy" onError={(e) => { e.currentTarget.src = '/images/baklava-placeholder.jpg'; }} />
                  </div>
                  <div className="slider-product-info">
                    <h3>{name}</h3>
                    {Number.isFinite(product.rating) && <div className="slider-rating-row">
                      <Star size={14} fill="#d4af37" stroke="none" />
                      <strong>{product.rating.toFixed(1)}</strong>
                      <span>({product.reviewCount})</span>
                    </div>}
                    <div className="slider-price-row">
                      <span className="slider-price">{productPrice(product, language)}</span>
                      <span className="slider-divider">/</span>
                      <span className="slider-weight">{product.weight}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <button type="button" className="slider-arrow slider-arrow-right" onClick={() => move(1)} aria-label="Next products">
        <ChevronRight size={24} />
      </button>

      <div className="slider-status" aria-hidden="true">
        <span className="slider-status-line"><i style={{ width: `${(((index % products.length) + products.length) % products.length + 1) / products.length * 100}%` }} /></span>
        <span>{String(((index % products.length) + products.length) % products.length + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
