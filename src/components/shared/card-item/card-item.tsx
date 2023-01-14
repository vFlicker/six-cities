import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { FavoriteStatus } from '~/constants';
import { useAppDispatch } from '~/hooks/use-app-dispatch';
import { useAppSelector } from '~/hooks/use-app-selector';
import * as appSlice from '~/store/slices/app/slice';
import { Offer } from '~/types/offer';

import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { Mark } from '../mark/mark';
import { StarRating } from '../star-rating/star-rating';

import * as S from './styles';

type CardItemProps = PropsWithChildren<{
  offer: Offer;
  cardType: 'big' | 'small';

  onCardItemMouseEnter?: (evt: MouseEvent) => void;
  onCardItemMouseLeave?: (evt: MouseEvent) => void;
}>;

const createOfferLink = (id: number): string => `/offers/${id}`;

export function CardItem({
  offer,
  cardType,

  onCardItemMouseEnter,
  onCardItemMouseLeave,
}: CardItemProps): JSX.Element {
  const {
    id,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const favoriteIdsInProgress = useAppSelector(
    appSlice.selectFavoriteIdsInProgress,
  );

  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    const status = isFavorite ? FavoriteStatus.Remove : FavoriteStatus.Add;
    dispatch(appSlice.toggleFavorite({ id, status }));
  };

  return (
    <S.Card
      cardType={cardType}
      onMouseEnter={onCardItemMouseEnter}
      onMouseLeave={onCardItemMouseLeave}
    >
      {isPremium && (
        <S.MarkWrapper>
          <Mark type="small" />
        </S.MarkWrapper>
      )}

      <S.ImageWrapper cardType={cardType}>
        <Link to={createOfferLink(id)}>
          <S.Image src={previewImage} cardType={cardType} alt="Place" />
        </Link>
      </S.ImageWrapper>

      <S.CardInfo>
        <S.PriceWrapper>
          <S.Price>
            <S.Value>
              &euro;
              {price}
            </S.Value>
            <S.Text>&#47;&nbsp;night</S.Text>
          </S.Price>

          <BookmarkButton
            size="small"
            isFavorite={isFavorite}
            isLoading={favoriteIdsInProgress.includes(id)}
            onClick={handleFavoriteButtonClick}
          />
        </S.PriceWrapper>

        <S.StarRatingWrapper>
          <StarRating width={73} height={12} rating={rating} />
        </S.StarRatingWrapper>

        <S.Title>
          <Link to={createOfferLink(id)}>{title}</Link>
        </S.Title>

        <S.Type>{type}</S.Type>
      </S.CardInfo>
    </S.Card>
  );
}
