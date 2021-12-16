import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOffers } from '../../store/api-actions';
import { getError, getOffers, getOffersLoadingStatus } from '../../store/offers-data/selectors';

import CardList from '../card-list';
import {
  SectionLocations,
  SectionMainEmpty,
  SectionMap,
  SectionPlaces,
} from './index';

import { CardItemCities } from '../card-item';
import Sorting from '../sorting';
import Spinner from '../spinner';
import LocationsList from '../locations-list';

function SectionMain(): JSX.Element {
  const offers = useSelector(getOffers);
  const isOffersLoading = useSelector(getOffersLoadingStatus);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  if (!offers.length) {
    return <SectionMainEmpty />;
  }

  return (
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

            <CardList
              className="cities__places-list places__list tabs__content"
              getCardItem={(offer) => <CardItemCities offer={offer} />}
            />
          </SectionPlaces>
          <div className="cities__right-section">
            <SectionMap className="cities__map" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SectionMain;
