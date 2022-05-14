import { useAppDispatch } from '@/hooks';
import { Offer } from '@/types';
import { appSlice } from '@/store';

import { CardItem } from './card-item';

type CardItemCitiesProps = {
  offer: Offer
}

export function CardItemCities(props: CardItemCitiesProps): JSX.Element {
  const { offer } = props;
  const { id } = offer;

  const dispatch = useAppDispatch();

  return (
    <CardItem
      {...props}
      cardClass="cities__place-card"
      cardImageWrapperClass="cities__image-wrapper"
      imageWidth={260}
      imageHeight={200}
      onCardItemMouseEnter={() => dispatch(appSlice.setActiveCardId(id))}
      onCardItemMouseLeave={() => dispatch(appSlice.setActiveCardId(-1))}
    />
  );
}
