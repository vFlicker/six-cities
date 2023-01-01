import { Review } from '~/types';

import { ReviewItem } from '../review-item';

import * as S from './styles';

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps): JSX.Element | null {
  const reviewCount = reviews.length;

  const component = (
    <>
      <S.Title>
        Reviews &middot;
        <S.ReviewCount>{reviewCount}</S.ReviewCount>
      </S.Title>

      <S.List>
        {reviews.map((review) => (
          <S.Item key={review.id}>
            <ReviewItem {...review} />
          </S.Item>
        ))}
      </S.List>
    </>
  );

  return reviewCount ? component : null;
}
