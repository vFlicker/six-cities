import { Offer } from '@/types';

import { CardItem } from './card-item';

const cardClass = 'near-places__card';
const cardImageWrapperClass = 'near-places__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

export function CardItemNearPlaces(props: { offer: Offer }): JSX.Element {
  return (
    <CardItem
      {...props}
      cardClass={cardClass}
      cardImageWrapperClass={cardImageWrapperClass}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    />
  );
}
