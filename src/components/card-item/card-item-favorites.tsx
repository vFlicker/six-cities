import React from 'react';

import CardItem, { CardItemType } from './card-item';

const cardClass = 'favorites__card place-card';
const cardImageWrapperClass = 'favorites__image-wrapper place-card__image-wrapper';
const cardInfoClass = 'favorites__card-info place-card__info';
const imageWidth = 150;
const imageHeight = 110;

function CardItemFavorites(props: CardItemType): JSX.Element {
  return (
    <CardItem
      cardClass={cardClass}
      cardImageWrapperClass={cardImageWrapperClass}
      cardInfoClass={cardInfoClass}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      {...props}
    />
  );
}

export default CardItemFavorites;
