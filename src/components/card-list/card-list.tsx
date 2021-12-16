import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getOffers } from '../../store/offers-data/selectors';
import { TOffer } from '../../types/offer';

type CardListProps = {
  className: string;
  getCardItem: (offer: TOffer) => JSX.Element;
};

function CardList(props: CardListProps): JSX.Element {
  const { className, getCardItem } = props;

  const offers = useSelector(getOffers);

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Fragment key={offer.id}>
          {getCardItem(offer)}
        </Fragment>
      ))}
    </div>
  );
}

export default CardList;
