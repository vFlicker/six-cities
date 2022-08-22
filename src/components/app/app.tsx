import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Global } from '@emotion/react';

import { useAppSelector } from '~/hooks';
import { AppRoute } from '~/constants';
import { userSlice } from '~/store';
import { browserHistory } from '~/utils';

import { Spinner } from '../shared';
import { PrivateRoute } from '../shared';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from '../pages';
import { globalStyle } from './styles';

export function App(): JSX.Element {
  const authStatus = useAppSelector(userSlice.getAuthStatus);
  const isLoading = useAppSelector(userSlice.getLoadingStatus);

  if (userSlice.isCheckedAuth(authStatus) || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Global styles={globalStyle} />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}
