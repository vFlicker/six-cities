import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AuthStatus } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { commentsSlice, userSlice } from '~/store';

import { ErrorMessage, Spinner } from '../../shared';
import { ReviewsForm } from './reviews-form';
import { ReviewsList } from './reviews-list';

import * as S from './styles';

export function ReviewsSection(): JSX.Element {
  const { id } = useParams();

  const reviews = useAppSelector(commentsSlice.selectComments);
  const isLoading = useAppSelector(commentsSlice.selectLoadingStatus);
  const error = useAppSelector(commentsSlice.selectError);

  const authStatus = useAppSelector(userSlice.selectAuthStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(commentsSlice.fetchComments(Number(id)));
  }, [dispatch, id]);

  const reviewCount = reviews.length;

  const reviewsList = Boolean(reviewCount) && <ReviewsList reviews={reviews} />;
  const reviewsForm = authStatus === AuthStatus.Auth && <ReviewsForm />;

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <S.Section>
      <S.Title>
        Reviews &middot;
        <S.ReviewCount>{reviewCount}</S.ReviewCount>
      </S.Title>

      {reviewsList}

      {reviewsForm}
    </S.Section>
  );
}
