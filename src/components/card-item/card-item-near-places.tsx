import React, { PropsWithChildren } from 'react';
import CardItem, { CardItemType } from './card-item';

const cardClass = 'near-places__card place-card';
const cardImageWrapperClass = 'near-places__image-wrapper place-card__image-wrapper';
const cardInfoClass = 'place-card__info';
const imageWidth = 260;
const imageHeight = 200;

function CardItemNearPlaces(props: PropsWithChildren<CardItemType>): React.ReactElement {
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

export default CardItemNearPlaces;
