import { Offer } from '@/types';

import { CardItem } from './card-item';

type CardItemNearPlacesProps = {
  offer: Offer
}

export function CardItemNearPlaces(props: CardItemNearPlacesProps): JSX.Element {
  return (
    <CardItem
      {...props}
      cardClass="near-places__card"
      cardImageWrapperClass="near-places__image-wrapper"
      imageWidth={260}
      imageHeight={200}
    />
  );
}
