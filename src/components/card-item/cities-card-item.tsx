import React, { PropsWithChildren } from 'react';
import CardItem, { CardItemType } from './card-item';

const cardClass = 'cities__place-card place-card';
const cardImageWrapperClass = 'cities__image-wrapper place-card__image-wrapper';
const cardInfoClass = 'place-card__info';
const imageWidth = 260;
const imageHeight = 200;

function CitiesCardItem(props: PropsWithChildren<CardItemType>): React.ReactElement {
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

export default CitiesCardItem;
