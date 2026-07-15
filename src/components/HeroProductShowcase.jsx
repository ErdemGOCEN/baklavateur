import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '../data/products';
import { heroShowcaseImages, images } from '../config/images';
import useLocalizedPath from '../hooks/useLocalizedPath';

export default function HeroProductShowcase(){
  const {i18n,t}=useTranslation();
  const language=i18n.language.slice(0,2);
  const path=useLocalizedPath();
  const slides=useMemo(()=>products.slice(0,5).map((product,index)=>({
    ...product,
    showcaseImage:heroShowcaseImages[index] || images.fallback,
  })),[]);
  const [index,setIndex]=useState(0);

  useEffect(()=>{
    const timer=window.setInterval(()=>setIndex(value=>(value+1)%slides.length),5200);
    return()=>window.clearInterval(timer);
  },[slides.length]);

  const product=slides[index];
  const name=product.name?.[language] || product.name?.tr || product.name;
  const description=product.description?.[language] || product.description?.tr || '';
  const slug=product.slug?.[language] || product.slug?.tr || product.slug;
  const move=(direction)=>setIndex(value=>(value+direction+slides.length)%slides.length);

  return <aside className="hero-showcase hero-showcase-modern" aria-roledescription="carousel" aria-label={t('sections.featured')}>
    <div className="showcase-visual-layer">
      <img key={product.id} src={product.showcaseImage} alt={name} onError={(event)=>{event.currentTarget.src=images.fallback;}}/>
      <div className="showcase-glow" />
    </div>
    <div className="showcase-topline">
      <span><Sparkles size={15}/> Baklavateur Selection</span>
      <strong>{String(index+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</strong>
    </div>
    <div className="hero-showcase-overlay">
      <span className="showcase-kicker">Genève · CHF</span>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="showcase-meta">
        <strong>CHF {product.price.toFixed(2)}</strong>
        <span><Star size={15} fill="currentColor"/> {product.rating.toFixed(2)} <small>({product.reviewCount})</small></span>
      </div>
      <div className="showcase-bottom">
        <a href={path('product',slug)}>{t('buttons.details')}</a>
        <div className="showcase-controls">
          <button type="button" onClick={()=>move(-1)} aria-label="Önceki ürün"><ChevronLeft/></button>
          <button type="button" onClick={()=>move(1)} aria-label="Sonraki ürün"><ChevronRight/></button>
        </div>
      </div>
    </div>
    <div className="showcase-dots">{slides.map((slide,dotIndex)=><button type="button" key={slide.id} className={dotIndex===index?'active':''} onClick={()=>setIndex(dotIndex)} aria-label={`${dotIndex+1}. ürünü göster`}/>)}</div>
  </aside>;
}
