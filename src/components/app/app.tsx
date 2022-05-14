import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { AppRoute } from '@/constants';
import { userSlice } from '@/store';
import { Review } from '@/types';
import { browserHistory } from '@/utils';

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
  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);
  const isLoading = useAppSelector(userSlice.getLoadingStatus);

  if (userSlice.isCheckedAuth(authorizationStatus) || isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
