import { Review } from '@/types';

import ReviewsItem from '../reviews-item';

type ReviewsListProps = {
  reviews: Review[];
};

export function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}

    </ul>
  );
}
