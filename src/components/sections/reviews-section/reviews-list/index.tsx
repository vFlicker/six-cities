import { Review } from '~/types';
import { getFullMonthDate, getScreenReaderDate } from '~/utils';

import { StarRating } from '../../../shared';

import * as S from './styles';

type ReviewsListProps = {
  reviews: Review[];
};

type ReviewsItemProps = {
  review: Review;
};

export function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <S.List>
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </S.List>
  );
}

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const { comment, date, rating, user } = review;
  const { avatarUrl, name } = user;

  return (
    <S.Item>
      <S.User>
        <S.AvatarWrapper>
          <S.Avatar src={avatarUrl} width="54" height="54" alt="User avatar" />
        </S.AvatarWrapper>
        <S.Name>{name}</S.Name>
      </S.User>

      <S.Info>
        <S.StarRatingWrapper>
          <StarRating width={98} height={16} rating={rating} />
        </S.StarRatingWrapper>
        <S.Comment>{comment}</S.Comment>
        <S.Time dateTime={getScreenReaderDate(date)}>
          {getFullMonthDate(date)}
        </S.Time>
      </S.Info>
    </S.Item>
  );
}
