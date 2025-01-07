import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/shared/libs/router';

import { getIsAuthenticated, useAuthStore } from '../model/authModel';

type PrivateRouteProps = {
  redirectTo?: string;
  children?: JSX.Element;
};

function PrivateRoute({
  children,
  redirectTo = AppRoute.Login,
}: PrivateRouteProps): JSX.Element {
  const isAuthenticated = useAuthStore(getIsAuthenticated);
  if (!isAuthenticated) return <Navigate to={redirectTo} />;
  return <>{children}</>;
}

export { PrivateRoute };
