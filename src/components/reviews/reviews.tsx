import React from 'react';
import ReviewsList from '../reviews-list';
import ReviewsForm from '../reviews-form';

function Reviews(): React.ReactElement {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>
      <ReviewsList />
      <ReviewsForm />
    </section>
  );
}

export default Reviews;
