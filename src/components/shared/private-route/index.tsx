import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/constants';
import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

type PrivateRouteProps = {
  children: JSX.Element;
};

// TODO: how we get token?
export function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(userSlice.selectAuthStatus);

  if (userSlice.isUserAuthorized(authStatus)) return children;

  return <Navigate to={AppRoute.Login} />;
}
