import { AuthStatus } from '~/constants';
import { useAppSelector } from '~/hooks';
import { offerSlice, userSlice } from '~/store';

import { ReviewsForm } from './reviews-form';
import { ReviewsList } from './reviews-list';

import * as S from './styles';

export function ReviewsSection(): JSX.Element {
  const reviews = useAppSelector(offerSlice.getComments);
  const authStatus = useAppSelector(userSlice.getAuthStatus);

  const reviewCount = reviews.length;

  const reviewsList = Boolean(reviewCount) && <ReviewsList reviews={reviews} />;
  const reviewsForm = authStatus === AuthStatus.Auth && <ReviewsForm />;

  return (
    reviews && (
      <S.Section>
        <S.Title>
          Reviews &middot;
          <S.ReviewCount>{reviewCount}</S.ReviewCount>
        </S.Title>

        {reviewsList}

        {reviewsForm}
      </S.Section>
    )
  );
}
