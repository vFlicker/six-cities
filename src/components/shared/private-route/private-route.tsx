import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isUserAuthorized = useAppSelector(userSlice.selectIsUserAuthorized);

  if (!isUserAuthorized) {
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
}
