import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { useAppSelector } from '@/hooks';
import { AppRoute } from '@/constants';
import { userSlice } from '@/store';
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
import { normalize } from './styles';

export function App(): JSX.Element {
  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);
  const isLoading = useAppSelector(userSlice.getLoadingStatus);

  if (userSlice.isCheckedAuth(authorizationStatus) || isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <GlobalStyle />
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
          <Route path={AppRoute.OFFER} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body,
  html {
    width: 100%;
    min-width: 1144px;
    margin: 0;
    padding: 0;
    font-family: rubik, arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.15;
    color: #383838;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    box-sizing: border-box
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color .3s, opacity .3s;
    cursor: pointer;
    outline: 0
  }

  textarea {
    resize: none
  }

  img {
    max-width: 100%;
    height: auto
  }
`;
