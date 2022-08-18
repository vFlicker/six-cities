import { AuthorizationStatus } from '@/constants';
import { useAppSelector } from '@/hooks';
import { offerSlice, userSlice } from '@/store';

import { ReviewsForm } from './reviews-form';
import { ReviewsList } from './reviews-list';
import * as S from './styles';

export function SectionReviews(): JSX.Element {
  const reviews = useAppSelector(offerSlice.getComments);
  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);

  return (
    reviews && (
      <S.Section>
        <S.Title>
          Reviews &middot;
          <S.Amount>{reviews.length}</S.Amount>
        </S.Title>
        <ReviewsList reviews={reviews} />
        {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm />}
      </S.Section>
    )
  );
}
