import React, { PropsWithChildren } from 'react';
import ReviewsList from '../reviews-list';
import ReviewsForm from '../reviews-form';
import { ReviewsListItem } from '../../types';

type SectionReviewsProps = {
  reviews: ReviewsListItem[]
}

function SectionReviews({ reviews }: PropsWithChildren<SectionReviewsProps>): React.ReactElement {
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

export default SectionReviews;
