import { FavoriteStatus } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { appSlice } from '~/store';
import { Offer } from '~/types';

import { BookmarkButton } from '../../shared/bookmark-button/bookmark-button';
import { Mark } from '../../shared/mark/mark';
import { StarRating } from '../../shared/star-rating/star-rating';
import { ReviewSection } from '../review-section/review-section';
import { Gallery } from './gallery/gallery';
import { Features } from './features/features';
import { Price } from './price/price';
import { WhatIsInside } from './what-is-inside/what-is-inside';
import { Host } from './host/host';

import * as S from './styles';

type PropertySectionProps = Offer;

export function PropertySection({
  bedrooms,
  description,
  goods,
  host,
  id,
  isFavorite,
  images,
  isPremium,
  maxAdults,
  price,
  rating,
  title,
  type,
}: PropertySectionProps): JSX.Element {
  const { isPro, name: authorName } = host;

  const favoriteIdsInProgress = useAppSelector(
    appSlice.selectFavoriteIdsInProgress,
  );

  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    const status = isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add;
    dispatch(appSlice.toggleFavorite({ id, status }));
  };

  return (
    <S.Section>
      <Gallery images={images} />

      <S.Container>
        <S.Wrapper>
          {isPremium && (
            <S.MarkWrapper>
              <Mark type="big" />
            </S.MarkWrapper>
          )}

          <S.Title>{title}</S.Title>

          <S.BookmarkButtonWrapper>
            <BookmarkButton
              size="large"
              isFavorite={isFavorite}
              isLoading={favoriteIdsInProgress.includes(id)}
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
            description={description}
            isPro={isPro}
          />

          <ReviewSection />
        </S.Wrapper>
      </S.Container>
    </S.Section>
  );
}
