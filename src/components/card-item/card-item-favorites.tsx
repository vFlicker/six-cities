import React from 'react';

import { TOffer } from '../../types/offer';

import CardItem from './card-item';

type CardItemFavoritesProps = {
  offer: TOffer;
};

const cardClass = 'favorites__card';
const cardImageWrapperClass = 'favorites__image-wrapper';
const cardInfoClass = 'favorites__card-info';
const imageWidth = 150;
const imageHeight = 110;

function CardItemFavorites(props: CardItemFavoritesProps): JSX.Element {
  return (
    <CardItem
      {...props}
      cardClass={cardClass}
      cardImageWrapperClass={cardImageWrapperClass}
      cardInfoClass={cardInfoClass}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    />
  );
}

export default CardItemFavorites;
