import { useState } from 'react';
export default function ProductGallery({ image, images = [], name }) {
 const photos = [...new Set([image, ...images].filter(Boolean))];
 const [selected, setSelected] = useState(null);
 const current = photos.includes(selected) ? selected : photos[0];
 return <div className="product-gallery">
  <div className="product-main-image"><img src={current} alt={name} onError={event => { event.currentTarget.src = '/images/baklava-placeholder.jpg'; }}/></div>
  {photos.length > 1 && <div className="product-gallery-thumbnails" aria-label={name}>
   {photos.map((src,index) => <button type="button" key={src} className={current === src ? 'active' : ''} aria-label={`${name} — ${index+1}`} aria-pressed={current === src} onClick={() => setSelected(src)}><img src={src} alt="" loading="lazy"/></button>)}
  </div>}
 </div>;
}
