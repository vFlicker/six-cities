import React, { JSX } from 'react';

import { OfferCard } from '~/entities/offer';
import { CardList } from '~/shared/ui/atoms';

type OfferListProps = {
  className?: string;
};

export function OfferList({ className }: OfferListProps): JSX.Element {
  return (
    <CardList cols={2} className={className}>
      {['1', '2', '3'].map((id) => (
        <OfferCard
          key={id}
          id={id}
          title="Beautiful & luxurious apartment at great location"
          price={120}
          rating={4.8}
          imageUrl="/mock/apartment-02.jpg"
          propertyType="Apartment"
          variant="vertical"
        />
      ))}
    </CardList>
  );
}
