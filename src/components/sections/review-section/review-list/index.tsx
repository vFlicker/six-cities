import { Review } from '~/types';

import { ReviewItem } from '../review-item';

import * as S from './styles';

type ReviewListProps = {
  reviews: Review[];
};

export function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <S.List>
      {reviews.map((review) => (
        <S.Item key={review.id}>
          <ReviewItem {...review} />
        </S.Item>
      ))}
    </S.List>
  );
}
