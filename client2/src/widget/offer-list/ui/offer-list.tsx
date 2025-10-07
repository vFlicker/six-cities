import React, { JSX } from 'react';

import { OfferCard } from '~/entities/offer';
import { CardList } from '~/shared/ui/atoms';

type OfferListProps = {
  className?: string;
};

export function OfferList({ className }: OfferListProps): JSX.Element {
  return (
    <CardList cols={2} className={className}>
      <OfferCard
        id="1"
        title="Beautiful & luxurious apartment at great location"
        price={120}
        rating={4.8}
        imageUrl="/mock/apartment-01.jpg"
        propertyType="Apartment"
        variant="vertical"
      />

      <OfferCard
        id="1"
        title="Beautiful & luxurious apartment at great location"
        price={120}
        rating={4.8}
        imageUrl="/mock/apartment-01.jpg"
        propertyType="Apartment"
        variant="vertical"
      />

      <OfferCard
        id="1"
        title="Beautiful & luxurious apartment at great location"
        price={120}
        rating={4.8}
        imageUrl="/mock/apartment-01.jpg"
        propertyType="Apartment"
        variant="vertical"
      />

      <OfferCard
        id="1"
        title="Beautiful & luxurious apartment at great location"
        price={120}
        rating={4.8}
        imageUrl="/mock/apartment-01.jpg"
        propertyType="Apartment"
        variant="vertical"
      />

      <OfferCard
        id="1"
        title="Beautiful & luxurious apartment at great location"
        price={120}
        rating={4.8}
        imageUrl="/mock/apartment-01.jpg"
        propertyType="Apartment"
        variant="vertical"
      />
    </CardList>
  );
}
