import { Review } from '~/types';
import { getFullMonthDate, getScreenReaderDate } from '~/utils';

import { StarRating } from '../../../shared/star-rating/star-rating';

import * as S from './styles';

type ReviewsItemProps = Review;

export function ReviewItem({
  comment,
  date,
  rating,
  user,
}: ReviewsItemProps): JSX.Element {
  const { avatarUrl, name } = user;

  return (
    <S.Item date-testid="reviews-item">
      <S.User>
        <S.AvatarWrapper>
          <S.Avatar src={avatarUrl} width="54" height="54" alt={name} />
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
