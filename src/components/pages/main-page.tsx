import React, { PropsWithChildren } from 'react';
import { CardType } from '../../const';
import { OfferListItem } from '../../types';
import CardList from '../card-list';
import {
  SectionHeader, SectionLocations, SectionMap, SectionPlaces
} from '../sections';
import LocationsList from '../locations-list/locations-list';

type MainPageProps = {
  offers: OfferListItem[]
}

const cities: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function MainPage({ offers }: PropsWithChildren<MainPageProps>): React.ReactElement {
  return (
    <div className="page page--gray page--main">
      <SectionHeader />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <SectionLocations className="container">
            <LocationsList cities={cities} />
          </SectionLocations>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <SectionPlaces className="cities__places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                120 places to stay in Amsterdam
              </b>

              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <CardList offers={offers} cardType={CardType.CITIES} />
            </SectionPlaces>
            <div className="cities__right-section">
              <SectionMap offers={offers} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
