import React, { useState } from 'react';
import { CardType } from '../../const';
import { IOffer } from '../../interfaces';
import CardItem from '../card-item';

interface CardListProps {
  offers: IOffer[],
  cardType: CardType
}

const getCardListClass = {
  [CardType.CITIES]: 'cities__places-list places__list tabs__content',
  [CardType.FAVORITES]: 'favorites__places',
};

function CardList({ offers, cardType }: CardListProps): React.ReactElement {
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
