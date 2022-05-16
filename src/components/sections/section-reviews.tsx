import { useAppSelector } from '@/hooks';
import { offerSlice } from '@/store';

import { ReviewsForm } from '../reviews-form';
import { ReviewsList } from '../reviews-list';

export function SectionReviews(): JSX.Element {
  const reviews = useAppSelector(offerSlice.getComments);

  return reviews && (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList reviews={reviews} />
      <ReviewsForm />
    </section>
  );
}
