import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getSortedOffers } from '../../store/offers-data/selectors';
import { TOffer } from '../../types/offer';

type CardListProps = {
  className: string;
  getCardItem: (offer: TOffer) => JSX.Element;
};

function CardList(props: CardListProps): JSX.Element {
  const { className, getCardItem } = props;

  const sortedOffers = useSelector(getSortedOffers);

  return (
    <div className={className}>
      {sortedOffers.map((offer) => (
        <Fragment key={offer.id}>
          {getCardItem(offer)}
        </Fragment>
      ))}
    </div>
  );
}

export default CardList;
