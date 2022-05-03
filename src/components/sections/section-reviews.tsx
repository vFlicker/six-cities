import { Review } from '@/types';

import { ReviewsForm } from '../reviews-form';
import { ReviewsList } from '../reviews-list';

type SectionReviewsProps = {
  reviews: Review[];
};

export function SectionReviews({ reviews }: SectionReviewsProps): JSX.Element {
  const amount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{amount}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <ReviewsForm />
    </section>
  );
}
