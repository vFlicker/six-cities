import React from 'react';
import { useDispatch } from 'react-redux';

import { setActiveCard } from '../../../store/model/app/app-slice';
import { TOffer } from '../../../types/offer';

import CardItem from '../card-item';

type CardItemNearPlacesProps = {
  offer: TOffer;
};

const cardClass = 'cities__place-card';
const cardImageWrapperClass = 'cities__image-wrapper';
const imageWidth = 260;
const imageHeight = 200;

function CardItemCities(props : CardItemNearPlacesProps): JSX.Element {
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

export default CardItemCities;
