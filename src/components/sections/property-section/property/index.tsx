import { FavoriteStatus } from '~/constants';
import { useAppDispatch } from '~/hooks';
import { offerSlice } from '~/store';
import { Offer } from '~/types';

import { BookmarkButton, Mark, StarRating } from '../../../shared';
import { ReviewsSection } from '../../index';
import { Features } from './features';
import { Price } from './price';
import { WhatIsInside } from './what-is-inside';
import { Host } from './host';

import * as S from './styles';

type OfferProps = Omit<Offer, 'images'>;

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
}: OfferProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { avatarUrl, isPro, name: authorName } = host;

  const handleFavoriteButtonClick = () => {
    // TODO: add favoriteInProgress
    dispatch(
      offerSlice.changeFavoriteStatus({
        id,
        status: isFavorite
          ? FavoriteStatus.NOT_FAVORITE
          : FavoriteStatus.FAVORITE,
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

        {/* TODO: look at the same btn at the main page */}
        <S.BookmarkButtonWrapper>
          <BookmarkButton
            width={31}
            height={33}
            isFavorite={isFavorite}
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
