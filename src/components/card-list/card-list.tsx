import React, { Fragment, PropsWithChildren } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardType } from '../../const';
import { setActiveCard } from '../../store/action';
import { getOffers } from '../../store/offer-data';
import { TOffer } from '../../types/offer';

import {
  CardItemCities,
  CardItemFavorites,
  CardItemNearPlaces,
} from '../card-item';

type CardListProps = {
  cardType: CardType
};

const getCardListClass: Record<CardType, string> = {
  [CardType.CITIES]: 'cities__places-list places__list tabs__content',
  [CardType.FAVORITES]: 'favorites__places',
  [CardType.NEAR_PLACES]: 'near-places__list places__list',
};

const getComponentByType = (
  type: CardType,
  offer: TOffer,
  handleCardItemMouseEnter: (evt: React.MouseEvent) => void,
  handleCardItemMouseLeave: (evt: React.MouseEvent) => void,
) => {
  switch (type) {
    case CardType.CITIES:
      return (
        <CardItemCities
          offer={offer}
          onCardItemMouseEnter={handleCardItemMouseEnter}
          onCardItemMouseLeave={handleCardItemMouseLeave}
        />
      );
    case CardType.FAVORITES:
      return (
        <CardItemFavorites
          offer={offer}
        />
      );
    case CardType.NEAR_PLACES:
      return (
        <CardItemNearPlaces
          offer={offer}
        />
      );
    default:
      throw new Error('Unknown CardType');
  }
};

function CardList({ cardType }: PropsWithChildren<CardListProps>): React.ReactElement {
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
