import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { reviewSlice, userSlice } from '~/store';

import { ErrorMessage } from '../../../components/shared/error-message/error-message';
import { ReviewForm } from './review-form/review-form';
import { ReviewList } from './review-list/review-list';

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

  return (
    <S.Section>
      <ReviewList reviews={reviews} />
      {isUserAuthorized && <ReviewForm />}
    </S.Section>
  );
}
