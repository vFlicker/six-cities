import React from 'react';

import { CityName } from '../../const';

import { CardItemFavorites } from '../card-item';
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

          <CardList
            className="favorites__places"
            getCardItem={(offer) => <CardItemFavorites offer={offer} />}
          />
        </li>
      </ul>
    </section>
  );
}

export default SectionFavorites;
