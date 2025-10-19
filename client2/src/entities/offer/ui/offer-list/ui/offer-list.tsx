import React, { JSX } from 'react';

import { CardList } from '~/shared/ui/atoms';

import { Offer } from '../../../model';
import { OfferCard } from '../../offer-card';

type OfferListProps = {
  offers: Offer[];
  className?: string;
};

export function OfferList({ className, offers }: OfferListProps): JSX.Element {
  return (
    <CardList cols={2} className={className}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} variant="vertical" />
      ))}
    </CardList>
  );
}
