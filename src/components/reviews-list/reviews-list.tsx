import React, { PropsWithChildren } from 'react';
import ReviewsItem from '../reviews-item';
import { TReview } from '../../types';

type ReviewsListProps = {
  reviews: TReview[]
}

function ReviewsList({ reviews }: PropsWithChildren<ReviewsListProps>): React.ReactElement {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}

    </ul>
  );
}

export default ReviewsList;
