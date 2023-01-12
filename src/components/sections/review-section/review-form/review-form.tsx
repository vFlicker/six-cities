import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { reviewSlice } from '~/store';

import { Button } from '../../../shared/button/button';
import { ReviewRating } from '../review-rating/review-rating';

import * as S from './styles';

const MIN_STAR_COUNT = 1;
const MIN_REVIEW_LENGTH = 50;

export function ReviewForm(): JSX.Element {
  const { id } = useParams();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isLoading = useAppSelector(reviewSlice.selectIsLoading);

  const dispatch = useAppDispatch();

  const handleFromSubmit = async (
    evt: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    evt.preventDefault();

    await dispatch(
      reviewSlice.postReview({
        id: Number(id),
        rating,
        comment,
      }),
    );

    setRating(0);
    setComment('');
  };

  const isSubmitDisabled =
    comment.length < MIN_REVIEW_LENGTH || rating < MIN_STAR_COUNT || isLoading;

  return (
    <S.From onSubmit={handleFromSubmit}>
      <S.Label htmlFor="review">Your review</S.Label>

      <ReviewRating
        rating={rating}
        onRatingToggle={(count: number) => setRating(count)}
      />

      <S.Textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        data-testid="review-textarea"
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
