import { useEffect } from 'react';

import { browserHistory } from '~/browser-history';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { offersSlice, userSlice } from '~/store';

import { Pages } from '../pages';
import { HistoryRouter, Spinner } from '../shared';

export function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const isAuthChecked = useAppSelector(userSlice.selectIsAuthChecked);
  const isUserAuthorized = useAppSelector(userSlice.selectIsUserAuthorized);
  const isLoading = useAppSelector(userSlice.selectIsLoading);

  useEffect(() => {
    dispatch(offersSlice.fetchAllOffers());
    dispatch(userSlice.checkAuthStatus());
  }, [dispatch]);

  useEffect(() => {
    if (isUserAuthorized) {
      dispatch(offersSlice.fetchFavoriteOffers());
    }
  }, [dispatch, isUserAuthorized]);

  if (!isAuthChecked || isLoading) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Pages />
    </HistoryRouter>
  );
}
