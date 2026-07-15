export default function ProductGallery({ image, name }) {
  return (
    <div className="product-gallery">
      <div className="product-main-image">
        <img src={image} alt={name} referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.src = '/images/baklava-placeholder.jpg'; }} />
      </div>
      <div className="product-thumbnails" aria-label="Product gallery">
        {[0, 1, 2].map((item) => (
          <button type="button" className={item === 0 ? 'active' : ''} key={item}>
            <img src={image} alt="" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.src = '/images/baklava-placeholder.jpg'; }} />
          </button>
        ))}
      </div>
    </div>
  );
}
