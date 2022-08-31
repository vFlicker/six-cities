import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Offer } from '~/types';

import { BookmarkButton, Mark, StarRating } from '..';

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

  return (
    <S.Card
      cardType={cardType}
      onMouseEnter={onCardItemMouseEnter}
      onMouseLeave={onCardItemMouseLeave}
    >
      <S.MarkWrapper>
        <Mark isPremium={isPremium} type="small" />
      </S.MarkWrapper>

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
            width={18}
            height={19}
            isFavorite={isFavorite}
            onClick={() => console.log(111)}
            // onClick={handleFavoriteButtonClick}
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
