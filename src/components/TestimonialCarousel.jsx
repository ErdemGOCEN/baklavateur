import { testimonials } from '../data/testimonials';

function ReviewCard({ item, duplicate = false }) {
  return (
    <article className="testimonial-card testimonial-marquee-card" aria-hidden={duplicate || undefined} lang={item.language}>
      <div className="review-head">
        <div className="stars" role="img" aria-label={`${item.rating} / 5`}>
          <span aria-hidden="true">★★★★★</span>
        </div>
        <strong>{item.rating.toFixed(1)}</strong>
      </div>
      <p>“{item.text}”</p>
      <div className="review-author">
        <strong>{item.name}</strong>
        <span>{item.city}</span>
      </div>
    </article>
  );
}

export default function TestimonialCarousel() {
  const unique=testimonials.filter((item,index,all)=>all.findIndex(other=>other.language===item.language&&other.text===item.text)===index);
  const duplicated = [...unique, ...unique];
  return (
    <div className="reviews-marquee-shell" aria-label={`${unique.length} customer reviews`}>
      <div className="reviews-marquee-viewport">
        <div className="reviews-marquee-track">
          {duplicated.map((item, index) => (
            <ReviewCard key={`${item.id}-${index}`} item={item} duplicate={index >= unique.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
