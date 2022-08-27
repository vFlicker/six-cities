import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '~/hooks';
import { offerSlice } from '~/store';

import { Button } from '../../../shared';
import { RatingList } from './rating-list';

import * as S from './styles';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 5;

export function ReviewsForm(): JSX.Element {
  const { id } = useParams();

  // TODO: move it to rating list
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const dispatch = useAppDispatch();

  // TODO: add sendingInProgress

  const isSubmitDisabled =
    review.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT;

  const handleFromSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(
      offerSlice.addComment({
        id: Number(id),
        rating,
        comment: review,
      }),
    );
  };

  return (
    <S.From onSubmit={handleFromSubmit}>
      <S.Label htmlFor="review">Your review</S.Label>

      <RatingList
        rating={rating}
        onRatingToggle={(count: number) => setRating(count)}
      />

      <S.Textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={({ target }) => setReview(target.value)}
      />

      <S.Wrapper>
        <S.HelpText>
          To submit review please make sure to set <S.Star>rating</S.Star> and
          describe your stay with at least{' '}
          <S.TextAmount>50 characters</S.TextAmount>.
        </S.HelpText>

        <Button type="submit" disabled={isSubmitDisabled}>
          Submit
        </Button>
      </S.Wrapper>
    </S.From>
  );
}
