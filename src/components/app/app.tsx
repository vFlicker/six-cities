import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from '@/utils';
import { Review } from '@/types';
import { getAuthorizationStatus, isCheckedAuth } from '@/store';
import { AppRoute } from '@/constants';

import { Spinner } from '../spinner';
import { PrivateRoute } from '../private-route';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from '../pages';

type AppProps = {
  reviews: Review[];
};

export function App({ reviews }: AppProps): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route
          path={AppRoute.FAVORITES}
          element={(
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          )}
        />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.OFFER} element={<OfferPage reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}
