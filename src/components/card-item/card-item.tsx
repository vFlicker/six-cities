import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import { IOffer } from '../../interfaces';
import convertRatingToPercents from '../../utils';

const OFFER_LINK = '/offers';

const getCardItemStyles = (type: CardType, isFavorite: boolean) => {
  const cardClass = `${type}__place-card place-card`;
  const cardImageWrapperClass = `${type}__image-wrapper place-card__image-wrapper`;
  const cardInfoClass = isFavorite ? 'favorites__info place-card__info' : 'place-card__info';

  return { cardClass, cardImageWrapperClass, cardInfoClass };
};

interface CardItemProps {
  offer: IOffer,
  cardType: CardType,
  onMouseEnter: (evt: React.MouseEvent) => void,
}

function CardItem(props: PropsWithChildren<CardItemProps>): React.ReactElement {
  const { offer, cardType, onMouseEnter } = props;

  const {
    id,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const cardMark = isPremium && (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const isFavorite = cardType === CardType.FAVORITES;

  const {
    cardClass,
    cardImageWrapperClass,
    cardInfoClass,
  } = getCardItemStyles(cardType, isFavorite);

  const imageSize = isFavorite
    ? { width: '150', height: '110' }
    : { width: '260', height: '200' };

  const ratingStarStyles = { width: convertRatingToPercents(rating) };

  return (
    <article className={cardClass} onMouseEnter={onMouseEnter}>
      {cardMark}
      <div className={cardImageWrapperClass}>
        <Link to={`${OFFER_LINK}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            {...imageSize}
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
            <span style={ratingStarStyles} />
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
