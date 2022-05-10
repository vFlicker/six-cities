import { useDispatch } from 'react-redux';

import { Offer } from '@/types';
import { setActiveCard } from '@/store';

import { CardItem } from './card-item';

type CardItemCitiesProps = {
  offer: Offer
}

export function CardItemCities(props: CardItemCitiesProps): JSX.Element {
  const { offer } = props;
  const { id } = offer;

  const dispatch = useDispatch();

  return (
    <CardItem
      {...props}
      cardClass="cities__place-card"
      cardImageWrapperClass="cities__image-wrapper"
      imageWidth={260}
      imageHeight={200}
      onCardItemMouseEnter={() => dispatch(setActiveCard(id))}
      onCardItemMouseLeave={() => dispatch(setActiveCard(-1))}
    />
  );
}
