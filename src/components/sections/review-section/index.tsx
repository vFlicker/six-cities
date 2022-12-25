import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { reviewSlice, userSlice } from '~/store';

import { ErrorMessage } from '../../shared';
import { ReviewForm } from './review-form';
import { ReviewList } from './review-list';

import * as S from './styles';

export function ReviewSection(): JSX.Element {
  const { id } = useParams();

  const reviews = useAppSelector(reviewSlice.selectReviews);
  const error = useAppSelector(reviewSlice.selectError);

  const isUserAuthorized = useAppSelector(userSlice.selectIsUserAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reviewSlice.fetchReviews(Number(id)));
  }, [dispatch, id]);

  if (error) return <ErrorMessage />;

  const reviewCount = reviews.length;

  return (
    <S.Section>
      <S.Title>
        Reviews &middot;
        <S.ReviewCount>{reviewCount}</S.ReviewCount>
      </S.Title>

      {reviewCount && <ReviewList reviews={reviews} />}

      {isUserAuthorized && <ReviewForm />}
    </S.Section>
  );
}
