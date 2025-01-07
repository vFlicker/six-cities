import { Navigate } from 'react-router-dom';

import { AppRoute } from '~/shared/libs/router';
import { useAppSelector } from '~/shared/libs/state';

import { getIsIsAuthenticated } from '../model/authModel';

type PrivateRouteProps = {
  redirectTo?: string;
  children?: JSX.Element;
};

function PrivateRoute({
  children,
  redirectTo = AppRoute.Login,
}: PrivateRouteProps): JSX.Element {
  const isAuthenticated = useAppSelector(getIsIsAuthenticated);

  if (!isAuthenticated) return <Navigate to={redirectTo} />;
  return <>{children}</>;
}

export { PrivateRoute };
