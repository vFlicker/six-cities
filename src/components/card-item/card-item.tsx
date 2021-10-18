import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { OfferListItem } from '../../types';
import convertRatingToPercents from '../../utils';

export type CardItemType = {
  offer: OfferListItem,
  onMouseEnter: (evt: React.MouseEvent) => void,
}

type CardItemProps = {
  cardClass: string,
  cardImageWrapperClass: string,
  cardInfoClass: string,
  imageWidth: number,
  imageHeight: number,
} & CardItemType;

const OFFER_LINK = '/offers';

function CardItem(props: PropsWithChildren<CardItemProps>): React.ReactElement {
  const {
    offer,
    onMouseEnter,
    cardClass,
    cardImageWrapperClass,
    cardInfoClass,
    imageWidth,
    imageHeight,
  } = props;

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
    <article className={cardClass} onMouseEnter={onMouseEnter}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={cardImageWrapperClass}>
        <Link to={`${OFFER_LINK}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className={cardInfoClass}>
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
          <Link to={`${OFFER_LINK}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardItem;
