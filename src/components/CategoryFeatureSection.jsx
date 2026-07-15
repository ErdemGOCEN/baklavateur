import { ArrowRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useLocalizedPath from '../hooks/useLocalizedPath';

const copy = {
  tr:{baklava:['Baklava Koleksiyonu','İncecik katlar, seçkin fıstıklar ve geleneksel ustalık.'],lokum:['Lokum Seçkisi','Kahve anlarına eşlik eden yumuşak dokular ve zarif aromalar.'],nuts:['Seçkin Kuruyemişler','Taze, kıtır ve özenle seçilmiş premium lezzetler.'],gift:['Özel Anlara Yakışan Hediye Kutuları','Cenevre’de kutlamalar ve anlamlı jestler için zarif seçkiler.']},
  fr:{baklava:['Collection de baklavas','Des couches délicates, des pistaches sélectionnées et un savoir-faire traditionnel.'],lokum:['Sélection de loukoums','Des textures fondantes et des arômes raffinés.'],nuts:['Fruits secs sélectionnés','Fraîcheur, croquant et sélection premium.'],gift:['Coffrets pour les moments précieux','Des compositions élégantes pour les occasions à Genève.']},
  de:{baklava:['Baklava-Kollektion','Feine Schichten, ausgewählte Pistazien und traditionelle Handwerkskunst.'],lokum:['Lokum-Auswahl','Zarte Texturen und raffinierte Aromen.'],nuts:['Ausgewählte Nüsse','Frische, Knusprigkeit und Premium-Auswahl.'],gift:['Geschenkboxen für besondere Momente','Elegante Kompositionen für besondere Anlässe in Genf.']},
  en:{baklava:['Baklava Collection','Delicate layers, selected pistachios and traditional craftsmanship.'],lokum:['Turkish Delight Selection','Soft textures and refined flavours.'],nuts:['Selected Nuts','Freshness, crunch and a premium selection.'],gift:['Gift Boxes for Special Moments','Elegant compositions for meaningful occasions in Geneva.']},
};

export default function CategoryFeatureSection({category,image,reverse=false,products=[]}){
  const {i18n,t}=useTranslation();
  const language=i18n.language.slice(0,2);
  const path=useLocalizedPath();
  const [title,text]=(copy[language]||copy.tr)[category];
  const items=products.slice(0,4);
  return <article className={`premium-collection-block ${reverse?'reverse':''}`}>
    <Link className="premium-collection-visual" to={`${path('products')}?category=${category}`}>
      <img src={image} alt={title}/>
      <div><span>Baklavateur — Genève</span><h2>{title}</h2></div>
    </Link>
    <div className="premium-collection-content">
      <div className="collection-copy"><span className="eyebrow">Collection</span><h2>{title}</h2><p>{text}</p><Link className="text-link" to={`${path('products')}?category=${category}`}>{t('buttons.explore')} <ArrowRight size={17}/></Link></div>
      <div className="collection-mini-grid">{items.map(product=>{
        const name=product.name[language]||product.name.tr;
        return <Link className="collection-mini-card" key={product.id} to={path('product',product.slug)}>
          <div className="collection-mini-image"><img src={product.image} alt={name}/></div>
          <div className="collection-mini-copy"><h3>{name}</h3><span><Star size={13} fill="currentColor"/> {product.rating.toFixed(2)}</span><strong>CHF {product.price.toFixed(2)}</strong></div>
        </Link>
      })}</div>
    </div>
  </article>
}
