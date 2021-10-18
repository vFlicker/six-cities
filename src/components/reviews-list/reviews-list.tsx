import React, { PropsWithChildren } from 'react';
import ReviewsItem from '../reviews-item';
import { ReviewsListItem } from '../../types';

type ReviewsListProps = {
  reviews: ReviewsListItem[]
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
