import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history, isCheckedAuth } from '@/utils';
import { Review } from '@/types';
import { getAuthorizationStatus } from '@/redux/state/user/selectors';
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

export function App(props: AppProps): JSX.Element {
  const { reviews } = props;

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
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}
