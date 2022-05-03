import { useDispatch } from 'react-redux';

import { Offer } from '@/types';
import { setActiveCard } from '@/redux/state/app/app-slice';

import { CardItem } from './card-item';

const cardClass = 'cities__place-card';
const cardImageWrapperClass = 'cities__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

export function CardItemCities(props : { offer: Offer }): JSX.Element {
  const { offer } = props;
  const { id } = offer;

  const dispatch = useDispatch();

  const handleCardItemMouseEnter = () => {
    dispatch(setActiveCard(id));
  };

  const handleCardItemMouseLeave = () => {
    dispatch(setActiveCard(-1));
  };

  return (
    <CardItem
      {...props}
      cardClass={cardClass}
      cardImageWrapperClass={cardImageWrapperClass}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      onCardItemMouseEnter={handleCardItemMouseEnter}
      onCardItemMouseLeave={handleCardItemMouseLeave}
    />
  );
}
