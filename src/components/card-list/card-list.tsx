import React, { useState } from 'react';
import { IOffer } from '../../interfaces';
import CardItem from '../card-item';

function CardList({ offers }: { offers: IOffer[] }): React.ReactElement {
  const [, setActiveCard] = useState<number>(0);

  const mouseEnterHandler = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();
    setActiveCard(() => id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardItem
          key={offer.id}
          offer={offer}
          onMouseEnter={(evt) => mouseEnterHandler(evt, offer.id)}
        />
      ))}
    </div>
  );
}

export default CardList;
