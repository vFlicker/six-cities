import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

type PrivateRouteProps = {
  children: JSX.Element;
};

// TODO: how we get token?
export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(userSlice.getAuthorizationStatus);

  if (userSlice.isUserAuthorized(authorizationStatus)) return children;

  return <Navigate to={AppRoute.LOGIN} />;
}
