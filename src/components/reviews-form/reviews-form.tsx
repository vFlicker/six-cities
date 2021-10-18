import React, { useState } from 'react';
import RatingList from '../rating-list';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 5;

function ReviewsForm(): React.ReactElement {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const ratingToggleHandler = (count: number) => {
    setRating(() => count);
  };

  const textareaChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  const isSubmitDisabled = review.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT;

  return (
    <form
      className="reviews__form form"
      onSubmit={submitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList rating={rating} ratingToggleHandler={ratingToggleHandler} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={textareaChangeHandler}
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

export default ReviewsForm;
