import { useState } from 'react';

import { RatingList } from '../rating-list';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 5;

export function ReviewsForm(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const isSubmitDisabled = review.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT;

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList
        rating={rating}
        onRatingToggle={(count: number) => setRating(count)}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={({ target }) => setReview(target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          {' '}
          <span className="reviews__star">rating</span>
          {' '}
          and describe your stay with at least
          {' '}
          <b className="reviews__text-amount">50 characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
