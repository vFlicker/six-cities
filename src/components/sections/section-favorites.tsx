import React, { PropsWithChildren } from 'react';
import CardList from '../card-list';
import { CardType } from '../../const';
import { OfferListItem } from '../../types';
import LocationsItem from '../locations-item';

type SectionFavoritesProps = {
  offers: OfferListItem[]
}

function SectionFavorites(
  { offers }: PropsWithChildren<SectionFavoritesProps>,
): React.ReactElement {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <LocationsItem city="Amsterdam" />
            </div>
          </div>

          <CardList offers={offers} cardType={CardType.FAVORITES} />
        </li>
      </ul>
    </section>
  );
}

export default SectionFavorites;
