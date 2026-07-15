import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

function ReviewCard({ item, duplicate = false }) {
  return (
    <article className="testimonial-card testimonial-marquee-card" aria-hidden={duplicate || undefined} lang={item.language}>
      <div className="review-head">
        <div className="stars" aria-label={`${item.rating} / 5`}>
          {[1,2,3,4,5].map(n => (
            <Star key={n} size={15} fill={n <= Math.round(item.rating) ? 'currentColor' : 'none'} />
          ))}
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
  const duplicated = [...testimonials, ...testimonials];
  return (
    <div className="reviews-marquee-shell" aria-label={`${testimonials.length} customer reviews`}>
      <div className="reviews-marquee-viewport">
        <div className="reviews-marquee-track">
          {duplicated.map((item, index) => (
            <ReviewCard key={`${item.id}-${index}`} item={item} duplicate={index >= testimonials.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
