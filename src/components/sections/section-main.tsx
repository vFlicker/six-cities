import React, { PropsWithChildren, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ActionCreator } from '../../store/action';
import { TState } from '../../store/reducer';
import ApiService from '../../services/api-service';
import ApiError from '../../errors';
import { TOffer } from '../../types';
import { CardType } from '../../const';

import CardList from '../card-list';
import Sorting from '../sorting';
import Spinner from '../spinner';
import LocationsList from '../locations-list';
import {
  SectionLocations,
  SectionMainEmpty,
  SectionMap,
  SectionPlaces,
} from './index';

import withApiServices from '../../hocs/with-api-services';

type MainPageProps = {
  offers: TOffer[],
  loading: boolean,
  error: null | ApiError,
  fetchOffers: () => void
};

function SectionMain(props: PropsWithChildren<MainPageProps>): React.ReactElement {
  const {
    offers,
    loading,
    error,
    fetchOffers,
  } = props;

  useEffect(() => {
    fetchOffers();
  }, []);

  if (loading) {
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

            <CardList cardType={CardType.CITIES} />
          </SectionPlaces>
          <div className="cities__right-section">
            <SectionMap className="cities__map" />
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state: TState) => ({
  offers: state.offers,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch: Dispatch, { apiService }: {apiService: ApiService}) => ({
  fetchOffers: ActionCreator.fetchOffers(apiService, dispatch),
});

export { SectionMain };
export default withApiServices()(
  connect(mapStateToProps, mapDispatchToProps)(SectionMain),
);
