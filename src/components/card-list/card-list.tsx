import React from 'react';
import { IOffer } from '../../interfaces';
import Card from '../card';

function CardList({ offers }: {offers: IOffer[]}): React.ReactElement {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );
}

export default CardList;
