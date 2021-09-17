import React from 'react';
import ReviewsItem from '../reviews-item';

function ReviewsList(): React.ReactElement {
  return (
    <ul className="reviews__list">
      <ReviewsItem />
    </ul>
  );
}

export default ReviewsList;
