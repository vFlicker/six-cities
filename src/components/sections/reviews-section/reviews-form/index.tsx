import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { commentsSlice } from '~/store';

import { Button } from '../../../shared';
import { RatingList } from './rating-list';

import * as S from './styles';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 5;

export function ReviewsForm(): JSX.Element {
  const isLoading = useAppSelector(commentsSlice.selectLoadingStatus);

  const dispatch = useAppDispatch();

  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const isSubmitDisabled =
    review.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT || isLoading;

  const handleFromSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    dispatch(
      commentsSlice.postComment({
        id: Number(id),
        rating,
        comment: review,
      }),
    ).then(() => {
      setRating(0);
      setReview('');
    });
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
