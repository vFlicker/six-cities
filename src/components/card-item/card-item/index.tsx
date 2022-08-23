import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Offer } from '~/types';

import { BookmarkButton, Mark, StarRating } from '../../shared';

import * as S from './styles';

type CardItemProps = PropsWithChildren<{
  offer: Offer;
  cardClass: string;
  cardImageWrapperClass: string;
  cardInfoClass?: string;
  imageWidth: number;
  imageHeight: number;

  onCardItemMouseEnter?: (evt: MouseEvent) => void;
  onCardItemMouseLeave?: (evt: MouseEvent) => void;
}>;

const createOfferLink = (id: number): string => `/offers/${id}`;

// TODO: look at the architecture of the components
export function CardItem({
  offer,
  cardClass,
  cardImageWrapperClass,
  cardInfoClass,
  imageWidth,
  imageHeight,

  onCardItemMouseEnter,
  onCardItemMouseLeave,
}: CardItemProps): JSX.Element {
  const { id, isPremium, previewImage, price, rating, title, type } = offer;

  return (
    <article
      // TODO: take a look at this lib https://www.npmjs.com/package/classnames
      className={`place-card ${cardClass}`}
      onMouseEnter={onCardItemMouseEnter}
      onMouseLeave={onCardItemMouseLeave}
    >
      <S.MarkWrapper>
        <Mark isPremium={isPremium} type="small" />
      </S.MarkWrapper>

      <div className={`place-card__image-wrapper ${cardImageWrapperClass}`}>
        <Link to={createOfferLink(id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place"
          />
        </Link>
      </div>

      <div className={`place-card__info ${cardInfoClass}`}>
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
            isFavorite={false}
            onClick={() => console.log(111)}
          />
        </S.PriceWrapper>

        <S.StarRatingWrapper>
          <StarRating width={73} height={12} rating={rating} />
        </S.StarRatingWrapper>

        <S.Title>
          <Link to={createOfferLink(id)}>{title}</Link>
        </S.Title>

        <S.Type>{type}</S.Type>
      </div>
    </article>
  );
}
