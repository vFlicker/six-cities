import React from 'react';

import ReviewsItem from '../reviews-item';
import { TReviews } from '../../types/review';

type ReviewsListProps = {
  reviews: TReviews;
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}

    </ul>
  );
}

export default ReviewsList;
