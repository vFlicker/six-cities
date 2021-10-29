import React from 'react';
import { CardType } from '../../const';
import CardList from '../card-list';
import LocationsList from '../locations-list/locations-list';
import Sorting from '../sorting';
import {
  SectionHeader,
  SectionLocations,
  SectionMap,
  SectionPlaces
} from '../sections';

function MainPage(): React.ReactElement {
  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SectionLocations className="container">
            <LocationsList />
          </SectionLocations>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <SectionPlaces className="cities__places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                120 places to stay in Amsterdam
              </b>

              <Sorting />

              <CardList cardType={CardType.CITIES} />
            </SectionPlaces>
            <div className="cities__right-section">
              <SectionMap className="cities__map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
