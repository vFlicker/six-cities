import { Fragment } from 'react';

import { Offer } from '@/types';

type CardListProps = {
  className: string;
  offers: Offer[];

  getCardItem: (offer: Offer) => JSX.Element;
};

export function CardList({
  className,
  offers,
  getCardItem,
}: CardListProps): JSX.Element {
  return (
    <div className={className}>
      {offers.map((offer) => (
        <Fragment key={offer.id}>{getCardItem(offer)}</Fragment>
      ))}
    </div>
  );
}
