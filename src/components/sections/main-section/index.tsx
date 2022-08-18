import { useLayoutEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { offersSlice } from '@/store';

import { CardItemCities } from '../../card-item';
import { CardList } from '../../card-list';
import { Sorting } from '../../sorting';
import { Spinner } from '../../spinner';
import { MainEmptySection } from '../main-empty-section';
import { SectionLocations, SectionMap, SectionPlaces } from '../index';
import * as S from './styles';

export function MainSection(): JSX.Element {
  const sortedOffers = useAppSelector(offersSlice.getSortedOffers);
  const isOffersLoading = useAppSelector(offersSlice.getOffersLoadingStatus);
  const offersError = useAppSelector(offersSlice.getOffersError);

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(offersSlice.fetchOffers());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (offersError) {
    return <h1>Error</h1>;
  }

  if (!sortedOffers) {
    return <MainEmptySection />;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <SectionLocations />
      <div className="cities">
        <S.MainContainer>
          <SectionPlaces className="cities__places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {sortedOffers.length} places to stay in Amsterdam
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
        </S.MainContainer>
      </div>
    </main>
  );
}
