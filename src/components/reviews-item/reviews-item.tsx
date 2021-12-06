import React from 'react';

import { TReview } from '../../types/review';
import { convertRatingToPercents } from '../../utils';

type ReviewsItemProps = {
  review: TReview;
};

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const {
    comment,
    rating,
    user,
  } = review;

  const {
    avatarUrl,
    name,
  } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="SectionReviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: convertRatingToPercents(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
