import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/hooks';
import { offerSlice } from '@/store';

import { RatingList } from '../rating-list';
import { Button } from '../shared';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 5;

export function ReviewsForm(): JSX.Element {
  const { id } = useParams();

  // TODO: move it to rating list
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const dispatch = useAppDispatch();

  // TODO: add sendingInProgress
  const isSubmitDisabled = review.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT;

  const handleFromSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(offerSlice.sendComment({
      id: Number(id),
      rating,
      comment: review,
    }));
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFromSubmit}
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
        <Button type="submit" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </div>
    </form>
  );
}
