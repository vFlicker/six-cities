import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getCurrentCityName, getCurrentSortType, getOffers } from '../../store/offers-data/selectors';
import { TOffer } from '../../types/offer';
import { sortOffers } from '../../utils/sort';

type CardListProps = {
  className: string;
  getCardItem: (offer: TOffer) => JSX.Element;
};

function CardList(props: CardListProps): JSX.Element {
  const { className, getCardItem } = props;

  const currentCityName = useSelector(getCurrentCityName);
  const currentSortType = useSelector(getCurrentSortType);
  const offers = useSelector(getOffers(currentCityName));

  const sortedOffers = sortOffers(offers, currentSortType);

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
