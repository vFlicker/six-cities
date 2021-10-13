import React, { PropsWithChildren, useState } from 'react';
import { CardType } from '../../const';
import { OfferListItem } from '../../types';
import CardItem from '../card-item';

type CardListProps = {
  offers: OfferListItem[],
  cardType: CardType
}

const getCardListClass = {
  [CardType.CITIES]: 'cities__places-list places__list tabs__content',
  [CardType.FAVORITES]: 'favorites__places',
  [CardType.NEAR_PLACES]: 'near-places__list places__list',
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
      {offers.map((offer) => (
        <CardItem
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={(evt) => mouseEnterHandler(evt, offer.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
