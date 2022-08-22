import { FavoriteStatus } from '~/constants';
import { useAppDispatch } from '~/hooks';
import { offerSlice } from '~/store';
import { Offer } from '~/types';

import { StarRating } from '../../../shared/star-rating';
import { ReviewsSection } from '../../index';
import { Features } from './features';
import { BookmarkButton } from './bookmark-button';
import { Mark } from './mark';
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
      offerSlice.changeOfferFavoriteStatus({
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
        {/* TODO: look at the same mark at the main page */}
        <Mark isPremium={isPremium} />

        <S.Title>{title}</S.Title>

        {/* TODO: look at the same btn at the main page */}
        <BookmarkButton
          isFavorite={isFavorite}
          onClick={handleFavoriteButtonClick}
        />

        <S.StarRatingWrapper>
          <StarRating width="147px" height="24px" rating={rating} hasText />
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
