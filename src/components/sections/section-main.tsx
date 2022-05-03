import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOffers } from '@/redux/state/offers/action';
import { getOffersError, getOffersLoadingStatus, getSortedOffers } from '@/redux/state/offers/selectors';

import { CardItemCities } from '../card-item';
import { CardList } from '../card-list';
import {
  SectionLocations,
  SectionMainEmpty,
  SectionMap,
  SectionPlaces,
} from './index';
import { LocationsList } from '../locations-list';
import { Sorting } from '../sorting';
import { Spinner } from '../spinner';

export function SectionMain(): JSX.Element {
  const sortedOffers = useSelector(getSortedOffers);
  const isOffersLoading = useSelector(getOffersLoadingStatus);
  const offersError = useSelector(getOffersError);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (offersError) {
    return <h1>Error</h1>;
  }

  if (!sortedOffers) {
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
              {sortedOffers.length}
              {' '}
              places to stay in Amsterdam
            </b>

            <Sorting />

            <CardList
              className="cities__places-list places__list tabs__content"
              offers={sortedOffers}
              getCardItem={(offer) => <CardItemCities offer={offer} />}
            />
          </SectionPlaces>
          <div className="cities__right-section">
            <SectionMap offers={sortedOffers} className="cities__map" />
          </div>
        </div>
      </div>
    </main>
  );
}
