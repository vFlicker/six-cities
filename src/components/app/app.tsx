import React from 'react';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppRoute } from '../../const';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from '../pages';
import history from '../../history';
import PrivateRoute from '../private-route';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { TOffers } from '../../types/offer';
import { TReviews } from '../../types/review';
import { isCheckedAuth } from '../../utils/user';

import Spinner from '../spinner';

type AppProps = {
  offers: TOffers;
  reviews: TReviews;
};

function App(props: AppProps): JSX.Element {
  const { reviews, offers } = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={(
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          )}
        />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offers} element={<OfferPage offers={offers} reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
