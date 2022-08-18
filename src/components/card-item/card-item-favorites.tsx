import { Offer } from '~/types';

import { CardItem } from './card-item';

type CardItemFavoritesProps = {
  offer: Offer;
};

export function CardItemFavorites(props: CardItemFavoritesProps): JSX.Element {
  return (
    <CardItem
      {...props}
      cardClass="favorites__card"
      cardImageWrapperClass="favorites__image-wrapper"
      cardInfoClass="favorites__card-info"
      imageWidth={150}
      imageHeight={110}
    />
  );
}
