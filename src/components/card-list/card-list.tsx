import React, { Fragment, PropsWithChildren, useState } from 'react';
import { CardType } from '../../const';
import { OfferListItem } from '../../types';
import {
  CitiesCardItem,
  FavoritesCardItem,
  NearPlacesCardItem
} from '../card-item';

type CardListProps = {
  offers: OfferListItem[],
  cardType: CardType
}

const getCardListClass: Record<CardType, string> = {
  [CardType.CITIES]: 'cities__places-list places__list tabs__content',
  [CardType.FAVORITES]: 'favorites__places',
  [CardType.NEAR_PLACES]: 'near-places__list places__list',
};

const getComponentByType = (
  type: CardType,
  offer: OfferListItem,
  onMouseEnter: (evt: React.MouseEvent) => void,
) => {
  switch (type) {
    case CardType.CITIES:
      return (
        <CitiesCardItem
          offer={offer}
          onMouseEnter={onMouseEnter}
        />
      );
    case CardType.FAVORITES:
      return (
        <FavoritesCardItem
          offer={offer}
          onMouseEnter={onMouseEnter}
        />
      );
    case CardType.NEAR_PLACES:
      return (
        <NearPlacesCardItem
          offer={offer}
          onMouseEnter={onMouseEnter}
        />
      );
    default:
  }

  throw new Error('Unknown CardType');
};

function CardList(props: PropsWithChildren<CardListProps>): React.ReactElement {
  const { offers, cardType } = props;

  const [, setActiveCard] = useState<number>(0);

  const mouseEnterHandler = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();
    setActiveCard(() => id);
  };

  const cardListClass = getCardListClass[cardType];

  return (
    <div className={cardListClass}>
      {offers.map((offer) => {
        const onMouseEnter = (evt: React.MouseEvent) => {
          mouseEnterHandler(evt, offer.id);
        };

        return (
          <Fragment key={offer.id}>
            {getComponentByType(cardType, offer, onMouseEnter)}
          </Fragment>
        );
      })}
    </div>
  );
}

export default CardList;
