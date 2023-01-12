import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '~/hooks';
import { offersSlice, userSlice } from '~/store';

import { Routing } from '../pages/routing';
import { Spinner } from '../shared/spinner/spinner';

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

  return <Routing />;
}
