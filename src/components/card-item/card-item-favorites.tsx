import { Offer } from '@/types';

import { CardItem } from './card-item';

const cardClass = 'favorites__card';
const cardImageWrapperClass = 'favorites__image-wrapper';
const cardInfoClass = 'favorites__card-info';
const imageWidth = 150;
const imageHeight = 110;

export function CardItemFavorites(props: { offer: Offer }): JSX.Element {
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
