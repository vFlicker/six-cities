import { FavoriteStatus } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice } from '~/store';
import { Offer } from '~/types';

import { BookmarkButton, Mark, StarRating } from '../../../shared';
import { ReviewsSection } from '../../index';
import { Features } from './features';
import { Price } from './price';
import { WhatIsInside } from './what-is-inside';
import { Host } from './host';

import * as S from './styles';

type PropertyProps = Offer;

export function Property({
  bedrooms,
  description,
  goods,
  host,
  id,
  isFavorite,
  isPremium,
  maxAdults,
  price,
  rating,
  title,
  type,
}: PropertyProps): JSX.Element {
  const { avatarUrl, isPro, name: authorName } = host;

  const favoriteIDsInProgress = useAppSelector(
    appSlice.selectFavoriteIDsInProgress,
  );

  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    dispatch(
      appSlice.toggleFavorite({
        id,
        status: isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add,
      }),
    );
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.MarkWrapper>
          <Mark isPremium={isPremium} type="big" />
        </S.MarkWrapper>

        <S.Title>{title}</S.Title>

        <S.BookmarkButtonWrapper>
          <BookmarkButton
            width={31}
            height={33}
            isFavorite={isFavorite}
            isLoading={favoriteIDsInProgress.includes(id)}
            onClick={handleFavoriteButtonClick}
          />
        </S.BookmarkButtonWrapper>

        <S.StarRatingWrapper>
          <StarRating width={147} height={24} rating={rating} hasText />
        </S.StarRatingWrapper>

        <Features
          bedroomCount={bedrooms}
          type={type}
          maxAdultsCount={maxAdults}
        />

        <Price price={price} />

        <WhatIsInside goods={goods} />

        <Host
          authorName={authorName}
          avatarUrl={avatarUrl}
          description={description}
          isPro={isPro}
        />

        <ReviewsSection />
      </S.Wrapper>
    </S.Container>
  );
}
