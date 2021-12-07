import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardType } from '../../const';
import { getOffers } from '../../store/offers-data/selectors';
import setActiveCard from '../../store/app-process/action';
import { TOffer } from '../../types/offer';

import {
  CardItemCities,
  CardItemFavorites,
  CardItemNearPlaces,
} from '../card-item';

type CardListProps = {
  cardType: CardType;
};

const getCardListClass: Record<CardType, string> = {
  [CardType.Cities]: 'cities__places-list places__list tabs__content',
  [CardType.Favorites]: 'favorites__places',
  [CardType.NearPlaces]: 'near-places__list places__list',
};

const getComponentByType = (
  type: CardType,
  offer: TOffer,
  handleCardItemMouseEnter: (evt: React.MouseEvent) => void,
  handleCardItemMouseLeave: (evt: React.MouseEvent) => void,
) => {
  switch (type) {
    case CardType.Cities:
      return (
        <CardItemCities
          offer={offer}
          onCardItemMouseEnter={handleCardItemMouseEnter}
          onCardItemMouseLeave={handleCardItemMouseLeave}
        />
      );
    case CardType.Favorites:
      return (
        <CardItemFavorites
          offer={offer}
        />
      );
    case CardType.NearPlaces:
      return (
        <CardItemNearPlaces
          offer={offer}
        />
      );
    default:
      throw new Error('Unknown CardType');
  }
};

function CardList({ cardType }: CardListProps): JSX.Element {
  const offers = useSelector(getOffers);

  const dispatch = useDispatch();

  const cardListClass = getCardListClass[cardType];

  return (
    <div className={cardListClass}>
      {offers.map((offer) => {
        const handleCardItemMouseEnter = () => {
          dispatch(setActiveCard(offer.id));
        };

        const handleCardItemMouseLeave = () => {
          dispatch(setActiveCard(-1));
        };

        return (
          <Fragment key={offer.id}>
            {getComponentByType(
              cardType,
              offer,
              handleCardItemMouseEnter,
              handleCardItemMouseLeave,
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default CardList;
