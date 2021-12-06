import React from 'react';

import { CardType, CityName } from '../../const';

import CardList from '../card-list';
import LocationsItem from '../locations-item';

function SectionFavorites(): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <LocationsItem cityName={CityName.Amsterdam} />
            </div>
          </div>

          <CardList cardType={CardType.Favorites} />
        </li>
      </ul>
    </section>
  );
}

export default SectionFavorites;
