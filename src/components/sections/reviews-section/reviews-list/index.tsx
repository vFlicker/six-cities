import { Review } from '~/types';
import { convertRatingToPercents } from '~/utils';

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
  const {
    comment,
    // date,
    rating,
    user,
  } = review;

  const { avatarUrl, name } = user;
  // TODO: normalize date
  // 2022-06-02T10:21:00.051Z

  return (
    <S.Item>
      <S.User>
        <S.AvatarWrapper>
          <S.Avatar src={avatarUrl} width="54" height="54" alt="User avatar" />
        </S.AvatarWrapper>
        <S.Name>{name}</S.Name>
      </S.User>

      <S.Info>
        <S.StarsWrapper>
          <S.Stars>
            <S.StarsItem width={convertRatingToPercents(rating)} />
            <S.StarsText>Rating</S.StarsText>
          </S.Stars>
        </S.StarsWrapper>
        <S.Comment>{comment}</S.Comment>
        <S.Time dateTime="2019-04-24">April 2019</S.Time>
      </S.Info>
    </S.Item>
  );
}
