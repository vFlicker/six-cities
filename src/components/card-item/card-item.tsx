import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Offer } from '@/types';
import { convertRatingToPercents } from '@/utils/convert-rating-to-percents';

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
  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  return (
    <article
      // TODO: take a look at this lib https://www.npmjs.com/package/classnames
      className={`place-card ${cardClass}`}
      onMouseEnter={onCardItemMouseEnter}
      onMouseLeave={onCardItemMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
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
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertRatingToPercents(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={createOfferLink(id)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
